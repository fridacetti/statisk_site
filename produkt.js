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
                    <h3 class="fed"> Model name</h3>
                    <p> ${data.productdisplayname}</p>
                    <h3 class="fed">Color</h3>
                    <p>${data.basecolour}</p>
                    <h3 class="fed">Inventory number</h3>
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
                  <label for="size">Vælg størrelse:</label>
        <select id="size">
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
        </select>
        <button id="addToCart">Tilføj til kurv</button>
            </div>
        </div>
        `;
  });
document.getElementById("addToCart").addEventListener("click", function () {
  const selectedSize = document.getElementById("size").value;
  console.log("Valgt størrelse:", selectedSize);
  alert(`Produkt tilføjet i størrelse ${selectedSize}`);
});
