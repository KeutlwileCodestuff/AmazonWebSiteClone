
export let cart = JSON.parse(localStorage.getItem('cart'));
if(! cart){
  cart = 
  [

  {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      quantity:2,

    },
    {
      id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      name: "Intermediate Size Basketball",
      quantity:3
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      quantity:3
    }

]};

export function DeleteFromCart(itemId){
  let itemIndex = -1;
  cart.forEach((item) => {
    itemIndex ++ ;
    if(item.id === itemId){
      cart.splice(itemIndex , 1);
      SaveToLocalStorage();
    };
  });
  
};

export function SaveToLocalStorage(){
  localStorage.setItem('cart' , JSON.stringify(cart));
}



function GetFromLocalStorage(){
  JSON.parse(localStorage.getItem('cart'));
}



export function AddToCartButton(button){
  let productIdInCart = button.dataset.productId;
  let isItemRepeated;

  cart.forEach((item)=>{
    if(item.id === productIdInCart){
      item.quantity ++;
      isItemRepeated = item;

    }; 
  });

  if(!isItemRepeated){
    cart.push({
      id: productIdInCart,
      name: button.dataset.productName,
      quantity:1
    });
    SaveToLocalStorage();
  };
  
}