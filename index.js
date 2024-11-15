// Import JSON file with products and display them
document.addEventListener("DOMContentLoaded", function() {

    // Get JSON
    fetch('products.json')
      .then(response => response.json())
      .then(data => renderProducts(data.products))
  
    // Function to render products 
    function renderProducts(products) {
        const productCardsContainer = document.getElementById('product-cards');
        const cardTemplate = document.querySelector('.card-template .card');  // Get the card template
    
        // Loop through each product in the products array and create a new card
        products.forEach(product => {
          const newCard = cardTemplate.cloneNode(true);  // Clone the template card
    
          // Update the cloned card with product data
          newCard.querySelector('.card-img-top').src = product.image_url;  // Product Image
          newCard.querySelector('.card-img-top').alt = product.name;  // Product Image Alt Text (if needed)
          newCard.querySelector('.card-title').textContent = product.name;  // Product Name
          newCard.querySelector('.card-text').textContent = product.description;  // Product Description
          newCard.querySelector('.card-price').textContent = `$${product.price.toFixed(2)}`;  // Product Price
    
          // Append the card to the container
          productCardsContainer.appendChild(newCard);
      });
    }
  });