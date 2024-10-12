const addProduct = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");

  const product = productName.value;
  const quantity = productQuantity.value;

  productName.value = "";
  productQuantity.value = "";

  //   console.log(product, quantity);
  displayProduct(product, quantity);
  saveProdutToLocalStored(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const saveCart = localStorage.getItem("cart");
  if (saveCart) {
    cart = JSON.parse(saveCart);
  }
  return cart;
};

const saveProdutToLocalStored = (product, quantity) => {
  const cartValue = getStoredShoppingCart();
  cartValue[product] = quantity;
  const cartStringfy = JSON.stringify(cartValue);
  localStorage.setItem("cart", cartStringfy);
};

const displayProductFromLocalStored = () => {
    const cart = getStoredShoppingCart();
    console.log(cart)
    for(const produt in cart){
        const product = cart[produt]
        displayProduct(produt, product)
    }
};
displayProductFromLocalStored()