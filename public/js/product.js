document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById("product-list");
      productList.innerHTML = ''; // Clear any existing content
      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4 col-lg-3 mb-4";
        productCard.innerHTML = `
          <div class="card shadow-sm">
            <img src="/images/${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <a href="/product/${product.id}" class="btn btn-success">View Details</a>
            </div>
          </div>
        `;
        productList.appendChild(productCard);
      });
    })
    .catch(error => console.error("Error loading products:", error));
});
