// Cart Working JS

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

// Making Function
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i=0; i< quantityInputs.length; i++){ 
    var input = quantityInputs[i];
    input.addEventListener("change",quantityChanged);
}

// Add to cart
var addCart = document.getElementsByClassName("add-cart");
for (var i=0; i< addCart.length; i++){ 
var button = addCart[i];
button.addEventListener("click", addCartClicked);
}
}


// Remove Items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    Updatetotal();
}

// Quantity Changes 
function quantityChanged(event){
    var input = event.target;
    if( isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }         
    Updatetotal();
}

// Add to cart

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title") [0].innerText;
    var Price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImag = shopProducts.getElementsByClassName("productImg")[0].src;
    addProductToCart(title,Price,productImag);
    Updatetotal();
}

function addProductToCart(title,price,productImag ){
    var cartShopBox = document.createElement("div");

    var cartItem = document.getElementsByClassName("col-2")[0];
    var cartItemNames = cartItems.getElementsByClassName("product-title");
    for(var i=0; i<cartItemsNames.length; i++){
        alert("You have already add this to cart");
    } 
}





// Update Total
function Updatetotal(){
    var cartContent = document.getElementsByClassName(" cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total=0;
    for(var i=0; i< cartBoxes.length; i++){ 
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("₹"," "));
    var quantity = quantityElement.Value;
    total = total + price * quantity;
    // If price contain some cents value
    total= Math.round(total * 100)/100;

    document.getElementsByClassName("total-price")[0].innerText = "₹" + total; 
}
}