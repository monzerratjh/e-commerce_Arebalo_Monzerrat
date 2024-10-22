// Array con las categorías de nuestro ecommerce
let categorias = [
    { nombre: "Home", 
      href: "./index.html" },
    { nombre: "Productos", 
      href: "./producto.html" },
    { nombre: "About us", 
      href: "./aboutus.html" }
]; 

// Array para agregar el HTML del menú que vamos a agregar
let menuCat = [];

// Recorremos el arreglo para crearle a cada item un HTML
for (let item of categorias) {
    menuCat.push(`
      <li class="nav-item">
           <a class="nav-link" href="${item.href}">${item.nombre}</a>
      </li>
    `);
} 

// Estructura de nuestro menú
let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">NavBar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${menuCat.join('')}
            </ul>
        </div>
    </div>
</nav>
`;

/*console.log("navbar.js cargado correctamente");*/

// Lo insertamos al DOM
document.querySelector('header').innerHTML = menu;
