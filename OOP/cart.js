
// step1

let items=[
     {id:1, name:"Apple", description:"Lorem ipsum dolor sit amet", price:15, qty:1, img:"apple.jpg"},
     {id:2, name:"Banana", description:"Lorem ipsum dolor sit amet", price:10, qty:1, img:"banana.webp"},
     {id:3, name:"Orange", description:"Lorem ipsum dolor sit amet", price:20, qty:1, img:"orange.jpeg"},
     {id:4, name:"Pinapple", description:"Lorem ipsum dolor sit amet", price:25, qty:1, img:"pinapple.jpeg"},
];

// step2
let products= document.querySelector(".products");
let html="";
items.forEach((item)=>{
    html+=`
              <div class="card">
                  <div class="card-img"><img src="img/${item.img}" alt="${item.name}" srcset=""></div>
                   <div class="description">
                      <p>${item.description}</p>
                      <p>Price:$${item.price}</p>
                      <button onclick="AddItem(${item.id})">Add</button>
                   </div>
              </div>
`;
});
products.innerHTML= html;

// step3
// cart begain ;
let cart = [];

//  add cart 
function AddItem(itemId){
   let  item = items.find((item)=>{
       return item.id == itemId
   });

   let itemExist= cart.find((item)=> { return  item.id == itemId });

   if (itemExist) {
        itemExist.qty += 1
   }else{
      cart.push(item)
   }
   console.log(cart);
   
   cartCalculation();
}


// step4
// cart calculation 
cartCalculation();
function cartCalculation(){
    let html="";
    let total= 0;
    cart.forEach((item, index)=>{

      total+= item.qty * item.price;
     html += `
     
       <tr>
          <td>${++index}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.qty}</td>
          <td>${item.qty * item.price}</td>
          <td><button onclick="AddItem(${item.id})">+</button>  <button onclick="decrementItem(${item.id})">-</button> <button onclick="delItem(${item.id})">Del</button></td>
        </tr>
     `;
    });

    document.querySelector('tbody').innerHTML= html;
    document.querySelector('.total').innerHTML= total;
}

// setp5
// clearAll 
function clearAll(){
   cart = [];
   cartCalculation()
   console.log(cart);  
}

function delItem(itemId){
   cart = cart.filter(item => item.id != itemId);
   cartCalculation();
}
function decrementItem(itemId){
  let itemExist= cart.find((item)=> { return  item.id == itemId });
   if (itemExist && itemExist.qty > 1) {
        itemExist.qty -= 1
   }
   cartCalculation();
}