const products = [
    { id: 1, name: "Wireless Headphones", price: "₹1999", image: "headphones.jpg" },
    { id: 2, name: "Smart Watch", price: "₹2999", image: "watch.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: "₹1499", image: "speaker.jpg" },
    { id: 4, name: "Mobile Stand", price: "₹499", image: "stand.jpg" }
  ];
  
  const container = document.getElementById("productContainer");
  if (container) {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart(productId) {
    alert("Product with ID " + productId + " added to cart!");
  }
  