const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const mode = document.getElementById('mode');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if (!checkErrorExist()) {
        console.log("Summary Page Display Here!");

        productContainer.style.display = "none";
        cartContainer.style.display = "none";
        personalDetailsContainer.style.display = 'none';
        const summaryName = document.getElementById('summaryName');
        const summaryEmail = document.getElementById('summaryEmail');
        summaryName.innerHTML = `Name: ${username.value}`;
        summaryEmail.innerHTML = `Email: ${email.value} <br><br>Invoice Details`;


        var cartItems = document.getElementById('productSummary')
        var productTitles = document.getElementsByClassName('cart-item-title');
        var productPrice = document.getElementsByClassName('cart-item-price');
        var productQuantity = document.getElementsByClassName('cart-quantity-summary');
        var cartSummaryTotal = document.getElementsByClassName('cart-total-price');

        for (let index = 0; index < productTitles.length; index++) {
            var itemSummaryRow = document.createElement('div')
            var title = productTitles[index].innerHTML;
            var price = productPrice[index].innerHTML;
            var quantity = productQuantity[index].value;
            var cartRowContents = `
            <br>---------------------------------------<br>
            <div>
                <span>Product: ${title}</span><br>
                <span>Price: ${price}</span><br>
                <span>Quantity: ${quantity}</span><br><br>

            </div>`;
            itemSummaryRow.innerHTML = cartRowContents;
            cartItems.append(itemSummaryRow);
        }

        var summaryCartTotal = document.createElement('div')
        var summaryCartTotalContent = `<span>Total Price: ${cartSummaryTotal[0].innerHTML}</span>`
        summaryCartTotal.innerHTML = summaryCartTotalContent;
        cartItems.append(summaryCartTotal);
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const checkErrorExist = () => {
    var nodeList = document
        .getElementById("form")
        .querySelectorAll(".error");

    for (let i = 0; i < nodeList.length; i++) {
        let item = nodeList[i];
        if (item.innerText.length > 0) {
            return true;
        }
    }
    return false;
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const contactValue = contact.value.trim();
    const modeValue = mode.value.trim();

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = username.value;

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        if (!regName.test(name)) {
            setError(username, 'Provide a valid name [First name + Last name]');
        }
        else {
            setSuccess(username);
        }
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if (contactValue === '') {
        setError(contact, 'Contact number is required');
    } else {
        setSuccess(contact);
    }

    if (modeValue === '') {
        setError(mode, 'Select a payment method');
    } else {
        setSuccess(mode);
    }
};
