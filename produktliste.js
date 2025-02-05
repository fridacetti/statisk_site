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
           ${
             product.soldout
               ? `<div class="soldout">
                    <p>Sold out</p>
                    </div>`
               : ""
           }
                <img class="pic" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <p class="line">${product.articletype}</p>
                <p class="line">${product.category}</p>
                  <div class="rabat-container">
                        <p>DKK ${product.price},-</p>
                    <p class="rabat ${product.discount ? "isonsale" : ""}">-${product.discount}%</p>
                </div>
                <a href="produkt.html?product=${product.id}">Read more</a>
            </div>
            `
    )
    .join("");
  product_list_container.innerHTML = markup;
}
