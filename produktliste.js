const mycategory = new URLSearchParams(window.location.search).get("category");
document.querySelector("h1").innerHTML = mycategory;
console.log("produktlise med categories:", mycategory);
const product_list_container = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(products) {
  const markup = products
    .map(
      (product) => ` 
  
          <div class="card">
                <img class="pic ${product.soldout ? "sop" : ""}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <p class="line">${product.articletype}</p>
                <p class="line">${product.category}</p>
                ${product.soldout ? `<p class="soldout">Sold out</p>` : ""}
                  <div class="rabat-container">
                        <p>DKK ${product.price},-</p>
                     <!-- Vis rabatkasse altid, men vis rabatprocenten kun, hvis der er rabat -->
        <p class="rabat ${product.discount ? "isonsale" : ""}">-${product.discount ? product.discount : 0}%</p>

        <!-- Vis rabatpris kun, hvis der er rabat -->
        ${product.discount ? `<p class="new">NOW DKK ${(product.price - (product.discount / 100) * product.price).toFixed(2)},-</p>` : ""}
                </div>
                <a href="produkt.html?product=${product.id}">Read more</a>
            </div>
            `
    )
    .join("");
  product_list_container.innerHTML = markup;
}
