let itemsContainerElemnet = document.querySelector(".items-container");

let item={
  item_image:`../images/1.jpg`,
  rating:{stars:4.5,
    noOfReviews:1400,
  },
  company_name:`Carlton London`,
  item_name:`Radium-Plated`,
  current_price:606,
  orginal_price:1045,
  discount:42,
  

}

itemsContainerElemnet.innerHTML = `
<div class="item-container">
      <img class="item-image"   src="${item.item_image}" alt="item image">

      <div class="rating">
${item.rating.stars}⭐| ${item.rating.noOfReviews}
      </div>

      <div class="company-name"> 
      ${item. company_name}
      </div>

      <div class="item-name">
      ${item.item_name}
      </div>
   
     <div class="price">
      <span class="current-price"> Rs ${item.current_price}</span>
      <span class="orginal-price"> Rs ${item. orginal_price}</span>
      <span class="discount"> ${item. discount}% OFF</span>
     </div>
     <button class="btn-add-bag">Add to Bag</button>
</div> `;
