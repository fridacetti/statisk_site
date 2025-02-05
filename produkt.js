console.log("siden vises");
const myproduct = new URLSearchParams(window.location.search).get("product");
const productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${myproduct}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <div class="produktside">
            <img class="produkt" src="https://kea-alt-del.dk/t7/images/webp/640/${myproduct}.webp" alt="">
            <div class="produkt_info">
                <h1>Product Information</h1>
                <div>
                    <p class="fed"> Model name</p>
                    <p> ${data.productdisplayname}</p>
                    <p class="fed">Color</p>
                    <p>${data.basecolour}</p>
                    <p class="fed">Inventory number</p>
                    <p>${data.id}</p>
                </div>
                <div class="info_2">
                    <h1>${data.brandname}</h1>
                    <p>Nike, creating experiencesfor today's athlete</p>
                </div>
            </div>
            <div class="more-info">
                <h1>${data.productdisplayname}</h1>
                <p> 
                ${data.brandname} | ${data.articletype} </p>
                <p>Choose a size</p>
                <p class="knap">Add to basket</p>
            </div>
        </div>
        `;
  });
