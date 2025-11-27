let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("cart-btn").onclick = () => {
    document.getElementById("cart-items").innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        document.getElementById("cart-items").appendChild(li);
    });

    document.getElementById("cart-modal").classList.remove("hidden");
};

document.getElementById("close-cart").onclick = () => {
    document.getElementById("cart-modal").classList.add("hidden");
};

document.getElementById("checkout-btn").onclick = () => {
    alert("Checkout system coming soon!");
};
