// FUNCIÓN que muestra el DETALLE del producto pedido
function mostrarDetalleProducto(id) {
    const producto = data.find(prod => prod.id === id);
    const productDetail = document.querySelector('#product-detail');
    if (producto) {
        productDetail.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" style="height: 200px; width: 350px;">
        <h2>${producto.titulo}</h2>
        <p>${producto.detalle}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
        ${
         localStorage.getItem("email") ?
            `<div class="input-group">
            <button class="btn btn-outline-secondary" type="button" onclick="decreaseItem(${producto.id})">-</button>
            <input type="number" class="form-control" value="1" id="counter-${producto.id}" min="1" max="${producto.stock}">
            <button class="btn btn-outline-secondary" type="button" onclick="increaseItem(${producto.id})">+</button>
            <a href="#" class="btn btn-primary col-12" onclick="addItems(${producto.id})">Agregar al carrito</a>
            </div>` :
         `<a href="login.html" class="btn btn-primary col-12">Iniciar Sesión para comprar</a>`
        }`;
    } else {
        mostrarAllProducts();  // Se llama a la función mostrarAllProducts
    }
}

function mostrarAllProducts() {
    const productDetail = document.querySelector('#product-detail');
    productDetail.innerHTML = data.map(product => `
        <div class="product-card">
            <h3>${product.titulo}</h3>
            <img src="${product.imagen}" alt="${product.titulo}" style="height: 200px; width: 300px;">
            <p>${product.detalle}</p>
            <p>Precio: $${product.precio.toFixed(2)}</p>
            <p>Stock: ${product.stock}</p>
            <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
        </div>
    `).join('');
}


    const urlParams = new URLSearchParams(window.location.search); //convierte esos parámetros en un objeto que nos permite leer los valores individuales.
    const prodId = parseInt(urlParams.get('prod')); //busca el valor del parámetro prod en la URL.
    mostrarDetalleProducto(prodId);


//Funciones del carrito
function increaseItem(id) {
    const counter = document.querySelector(`#counter-${id}`);
    const product = data.find(item => item.id === id);

    if (product && counter) {
        const currentValue = Number(counter.value);
        if (currentValue < product.stock) {
            counter.value = currentValue + 1;
        } else {
            Swal.fire({
                icon: 'warning',
                title: '¡Stock máximo alcanzado!',
                text: `No puedes agregar más de ${product.stock} unidades.`,
            });
        }
    }
}

function decreaseItem(id) {
    const counter = document.querySelector(`#counter-${id}`);
    if (counter && Number(counter.value) > 1) {
        counter.value = Number(counter.value) - 1;
    }
}

/*function actualizarCantidadCarrito() {
    const cards = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = cards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) quantityTag.innerText = quantity;
}*/

function addItems(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const counter = document.querySelector(`#counter-${id}`); // Selector único
    const product = data.find(item => item.id === id);
    const quantity = counter ? Number(counter.value) : 1;

    // Comprobar si el producto ya está en el carrito
    const itemIndex = cart.findIndex(item => item.product.id === id);
    if (itemIndex !== -1) {
        const newQuantity = cart[itemIndex].quantity + quantity;
        console.log(newQuantity)
        if (newQuantity > product.stock) {
            cart[itemIndex].quantity = newQuantity;
            Swal.fire({
                icon: 'warning',
                title: '¡Stock máximo alcanzado!',
                text: `No puedes agregar más de ${product.stock} unidades.`,
            });
            return;
        }
    } else {
        cart.push({ product: product, quantity });
    }

    // Actualizar carrito y localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar cantidad y total
    actualizarCantidadCarrito();

    // Reiniciar contador
    if (counter) counter.value = "1";

    // Mostrar mensaje de éxito
    Toastify({
        text: "Agregaste producto/s al carrito de compras.",
        style: { background: "#DB5079" },
    }).showToast();
}

// Inicializar la cantidad en el ícono del carrito
actualizarCantidadCarrito();