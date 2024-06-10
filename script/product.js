// Product constructor function
function Product(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
}

// Create new products
let product1 = new Product('Product 1', 'image1.jpg', 19.99, 'This is product 1');
let product2 = new Product('Product 2', 'image2.jpg', 29.99, 'This is product 2');
let product3 = new Product('Product 3', 'image3.jpg', 39.99, 'This is product 3');

let products = [product1, product2, product3];

let productRow = document.querySelector('#product-row');

// Function to add a product to the page
function addProductToPage(product) {

    productRow.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price">R${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Loop through the products array and add each product to the page
for (let i = 0; i < products.length; i++) {
    addProductToPage(products[i]);
}