import { fetchAPI, fetchAPIAsync } from "./module.js";
// C1
// const fetchAPI = (url) => {
//   const data = fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
//   return data;
// };
fetchAPI("https://jsonexamples.com/products/categories").then((data) => {
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

// // async / await C2
// const fetchApiAsync = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

fetchApiAsync("https://jsonexamples.com/products/search?q=Laptop").then(
  (data) => {
    console.log(data);
  },
);
// async / await C1
const fetchAsyncAwait = async () => {
  const response = await fetch(
    "https://jsonexamples.com/products/search?q=Laptop",
  );
  const data = await response.json();
  console.log(data);
};
fetchAsyncAwait();
