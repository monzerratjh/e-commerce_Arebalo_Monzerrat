const cardSection = document.querySelector("#cart #cards");

function getCart(cards) {
    const list = cards.map(card => `
        <div class="card border shadow-none mb-2">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="me-4">
                        <img src="${card.product.imagen}" class="img-fluid rounded-start" alt="${card.product.titulo}" style="height: 200px; width:300px;">
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <h5 class="text-truncate font-size-18">${card.product.titulo}</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Precio</p>
                                    <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Cantidad</p>
                                    <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Total</p>
                                    <h5>${card.product.precio * card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="mt-3">
                                    <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );

    cardSection.innerHTML = list.join("");
    total(cards); // Actualizar el total
    actualizarCantidadCarrito(); // Actualizar la cantidad total
}

getCart(JSON.parse(localStorage.getItem("cart")));

// Función para calcular el total
function total(cards) {
    let cartTotal = document.querySelector("#cart-total");

    let total = cards.reduce(
        (acumulado, actual) => acumulado + actual.product.precio * actual.quantity, 0
    );
    cartTotal.innerText = "$" + total.toFixed(2);
}

function actualizarCantidadCarrito() {
    const cards = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = cards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);

    // Actualiza en localStorage
    localStorage.setItem("quantity", quantity);

    // Actualiza el contador en el HTML
    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) quantityTag.innerText = quantity;
}

// Función para eliminar un producto
function removeItem(id) {
    const cards = JSON.parse(localStorage.getItem("cart"));
    const newCards = cards.filter(card => card.product.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards); // Actualiza el carrito
    total(newCards); // Actualiza el total
    actualizarCantidadCarrito(); // Actualiza la cantidad total
}

// Función para vaciar el carrito
function clearCart() {
    let quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
    localStorage.setItem("cart", JSON.stringify([]));
    getCart([]); // Limpiar la vista del carrito
    total([]); // Actualizar el total a 0
}

// Verificar la sesión del usuario
function checkSession() {
    if (!localStorage.getItem("email")) {
        window.location.href = "index.html"; // Redirige a la página principal
    }
}

checkSession();

function goIndex(){
    window.location.href = "index.html";
}

function checkout() {
    const recurso = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart"))
    }

    fetch ("https://67367b0eaafa2ef222309fad.mockapi.io/cart",
        {
            method: "POST",
            body: JSON.stringify(recurso),
        })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            text: `Gracias ${localStorage("email")}. Hemos registrado la orden número ${data.id}`,
            confirmButtonText: "Sí"
        })
        clearCart();
    })

    .catch(() => 
        Swal.fire({
            text: `Hubo un problema. Inténtelo más tarde.`,
            confirmButtonText: "Ok."
        })
    )
} 