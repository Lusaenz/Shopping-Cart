const containerCard = document.getElementById("container-card");

function productStartCard(products) {
  products.forEach((product) => {
    const productNew = document.createElement("div");
    productNew.classList = ("card-products");

    const productImage = document.createElement("img");
    productImage.classList = ("image-products");
    productImage.src = product.imag;
    productImage.alt = product.name;

    const productName = document.createElement("h2")
    productName.textContent = product.name

    const productPrice = document.createElement("p")
    productPrice.textContent = `$${product.price.toLocaleString()}`;

    const buyButton = document.createElement("button")
    buyButton.textContent = "Aregar al carrito"
    buyButton.classList.add = ("buy-button");


    productNew.appendChild(productImage);
    productNew.appendChild(productName);
    productNew.appendChild(productPrice);
    productNew.appendChild(buyButton);

    containerCard.appendChild(productNew);
    productNew.getElementsByTagName('button')[0].addEventListener('click', ()=> addToCart(product))
  });
}

productStartCard(products);