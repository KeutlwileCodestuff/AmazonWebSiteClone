export let cart = [

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

];

export function DeleteFromCart(itemId){
  let itemIndex = -1;
  cart.forEach((item) => {
    itemIndex ++ ;
    if(item.id === itemId){
      cart.splice(itemIndex , 1);
    };
  });
  console.log(`cart len after ${cart}`);

};
