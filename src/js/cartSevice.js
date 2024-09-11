function addToCart(product) {
  const memory = JSON.parse(localStorage.getItem("Accesorios"));
  console.log(memory);
  if(!memory){
    const newProduct = getNewProductForMemory(product);
    localStorage.setItem("Accesorios", JSON.stringify([newProduct]));
  } else {
    const productIndex = memory.findIndex(Accesorios => Accesorios.id === product.id)
    console.log(productIndex);
    const newMemory = memory
    if(productIndex === -1){
      newMemory.push(getNewProductForMemory(product))
    } else {
      newMemory[productIndex].cantidad ++;
    }
    localStorage.setItem("Accesorios", JSON.stringify(newMemory));
  }
  updateCartNumber();
}

function getNewProductForMemory(product){
  const newProduct = product;
  newProduct.cantidad= 1;
  return newProduct;
}

const numberCartElement = document.getElementById("cart-counter");
function updateCartNumber(){
  const memory = JSON.parse(localStorage.getItem("Accesorios"));
  const count = memory.reduce((acum, current) => acum+current.cantidad,0);
  numberCartElement.innerText = count;
}

updateCartNumber();
