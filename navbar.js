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
              <ul class="navbar-nav ms-auto"> <!-- Alinea a la derecha -->
                ${
                  localStorage.getItem("email")
                  ? `<li class="nav-item me-2"><a href="#" class="nav-link">${localStorage.getItem("email")}</a></li>
                     <li class="nav-item me-2"><span>|</span></li> 
                     <li class="nav-item" onclick="closeSession()"><a href="#" id="logout" class="nav-link">Cerrar Sesión</a></li>
                     <span>|</span>
                     <li class="nav-item"> <a style="text-decoration: none; color: black;" href="./cart.html"><img height="25" src="./assets/cart.png" alt="Comprar"/> <b>${localStorage.getItem("quantity")}</b> </a>
                     <span>|</span>` 
                  : `<li class="nav-item"><a href="./login.html" class="nav-link">Iniciar Sesión</a></li>`
                }
            </ul>
        </div>
    </div>
</nav>
`;

function closeSession () {
  localStorage.clear();
  location.href = "./index.html"
}

// Lo insertamos al DOM
document.querySelector('header').innerHTML = menu;
