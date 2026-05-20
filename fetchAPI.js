const fetchAPI = (url) => {
  const data = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return data;
};
// C2
fetchAPI("https://jsonexamples.com/products/categories")
  .then((data) => {
    let html = "";
    data.forEach((category) => {
      html += `
        <div class="category-item">${category}</div>
        `;
    });
    document.getElementById("category-list").innerHTML = html;
  });

// C1
fetch("https://jsonexamples.com/products/search?q=Laptop")
  .then((res) => res.json())
  .then((data) => {
    let html = "";
    data.products.forEach((product) => {
      html += `
        <img src=${product.thumbnail} alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        `;
    });
    document.getElementById("product-list").innerHTML = html;
  });
