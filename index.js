const category_list = document.querySelector(".category_list");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  const markup = categories
    .map(
      (category) => ` 
      
                <a href="produktliste.html?category=${category.category}">${category.category}</a>
         
            `
    )
    .join("");
  category_list.innerHTML = markup;
}
