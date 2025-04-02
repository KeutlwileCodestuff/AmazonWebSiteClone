import { cart , DeleteFromCart} from "../cart/cart.js";
import { products } from "../data/products.js";
import * as time from "../scripts/utils/time.js";
import { DeliveryOptions } from "../data/deliveryOptions.js";

let cartHtml = '';
let deliveryHtml = '';

cart.forEach((item) => {
  let MatchingItem;
  
  products.forEach((product) => {
      if(item.id === product.id){
          MatchingItem = product;
      };
  });
   
  cartHtml += `<div class="cart-item-container remove-from-page-${MatchingItem.id}">
  <div class="delivery-date">
    Delivery Date : date-here
  </div>
  
  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${MatchingItem.image}">
  
    <div class="cart-item-details">
      <div class="product-name">
        Black and Gray Athletic Cotton Socks - 6 Pairs
      </div>
      <div class="product-price">
        $${(MatchingItem.priceCents / 100).toFixed(2)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${item.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary"
        data-item-id = "${MatchingItem.id}">
          Delete
        </span>
      </div>
    </div>
  
    <div class="delivery-options">

    ${DeliveryOptionsHtml(item)}

    </div>
  </div>
  </div>
  `;
});

function DeliveryOptionsHtml(item){

  DeliveryOptions.forEach(() =>{
    deliveryHtml += `
      <div class="delivery-options-title">
      Choose a delivery option:
    </div>
    <div class="delivery-option">
      <input type="radio" checked
        class="delivery-option-input"
        name="delivery-option-${item.id }">
      <div>
        <div class="delivery-option-date free-shipping-option">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price ">
          FREE Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${item.id }">
      <div>
        <div class="delivery-option-date delivery-3-days-after">
        3 days after
        </div>
        <div class="delivery-option-price">
          $4.99 - Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${item.id }">
      <div>
        <div class="delivery-option-date delivery-today">
        </div>
        
        <div class="delivery-option-price">
          $9.99 - Shipping
        </div>
      </div>
    </div>
  `;
  })


}
document.querySelector('.order-summary').innerHTML = cartHtml;
document.querySelector('.delivery-options').innerHTML = deliveryHtml;


document.querySelectorAll('.delete-quantity-link').forEach((deleteLink)=>{
  deleteLink.addEventListener('click', () =>{
    let itemId = deleteLink.dataset.itemId;
    DeleteFromCart(itemId);
    document.querySelector(`.remove-from-page-${itemId}`).remove();
  });
});

