// Alert when clicking "Explore Collection"
document.querySelector(".explore-btn").addEventListener("click", function() {
    alert("Discover our premium collection!");
});

// Alert when clicking "Buy Now"
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Item added to cart!");
    });
});

// Form Submission Alert
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});


// Shopping Cart Functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItems = document.querySelector("#cart-items");
    let totalAmount = document.querySelector("#total-amount");
    cartItems.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - ₹${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    totalAmount.textContent = `Total: ₹${total}`;
}

// Alert when clicking "Buy Now"
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Item added to cart!");
    });
});


// Open Cart Sidebar
function openCart() {
    document.getElementById("cartSidebar").style.right = "0";
}

// Close Cart Sidebar
function closeCart() {
    document.getElementById("cartSidebar").style.right = "-350px";
}

// Proceed to Checkout
function proceedToCheckout() {
    // Handle checkout logic here
}


// Open Cart Sidebar
function openCart() {
    document.getElementById("cartSidebar").style.right = "0";
}

// Close Cart Sidebar
function closeCart() {
    document.getElementById("cartSidebar").style.right = "-350px";
}

// Proceed to Checkout
function proceedToCheckout() {
    // Handle checkout logic here
}

// Cancel Product from Cart
function cancelProduct(button) {
    // Find the item container and remove it from the cart
    const item = button.parentElement;
    item.remove();
    updateCartTotal();  // Update total price after removing the item
}

// Go Back Button (can be used for navigating back to the previous page)
function goBack() {
    window.history.back();
}

// Update Cart Total (function to recalculate total price)
function updateCartTotal() {
    let totalPrice = 0;
    const cartItems = document.querySelectorAll('.cart-items .item');
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('p:nth-child(2)').textContent.replace('₹', ''));
        totalPrice += price;
    });
    document.getElementById("totalPrice").textContent = totalPrice;
}

// Go Back Button (redirect to home page)
function goBack() {
    window.location.href = '/'; // Replace '/' with your homepage URL
}
function goBack() {
    window.history.back(); // Goes to the previous page
}


