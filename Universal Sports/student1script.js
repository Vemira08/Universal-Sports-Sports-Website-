var productContainer;
var cartContainer;
var personalDetailsContainer;

productContainer = document.getElementById('productContainer');
cartContainer = document.getElementById('cartContainer');
personalDetailsContainer = document.getElementById('personalDetailContainer');
cartContainer.style.display = 'none';
personalDetailsContainer.style.display = 'none';

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()

}

function proceedOnShoppingCart($event) {
    $event.preventDefault();
    productContainer.style.display = "none";
    cartContainer.style.display = "block";
    personalDetailsContainer.style.display = 'none';

    //bindShoppingCartItems();
}
function continueHandler() {
    var cartSummaryTotal = document.getElementsByClassName('cart-total-price');
    if(cartSummaryTotal && cartSummaryTotal.length == 1 && cartSummaryTotal[0].innerHTML != '$0') {
        productContainer.style.display = "none";
        cartContainer.style.display = "none";
        personalDetailsContainer.style.display = 'block';
    }
    else {
        alert("Please select at least one product to continue!.")
    }
   
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('remove-button')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)

    }

    var quantityInput = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', changeQuantity)
    }
    var addToCartButtons = document.getElementsByClassName('item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', clickedAddToCart)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}

function changeQuantity(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}
function clickedAddToCart(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateTotal()
    
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerHTML == title) {
            alert("This item is already added to the cart!")
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-item-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="quantity cart-quantity-summary" type="number" value="1">
            <button class="button1 remove-button" type="button">Remove</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', changeQuantity)
}


function updateTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var totalPrice = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceOfItem = cartRow.getElementsByClassName('cart-item-price')[0]
        quantityOfItem = cartRow.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceOfItem.innerHTML.replace('$', ''))
        var quantity = quantityOfItem.value
        totalPrice = totalPrice + (price * quantity)

    }
    totalPrice = Math.round(totalPrice * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + totalPrice
}




