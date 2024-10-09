//Array con las categorías de nuestro ecommerce
let categorias = [
    {
        nombre: "Home",
        href: "./index.html"
    },
    {
        nombre: "Productos",
        href: "./producto.html"
    },
    {
        nombre: "About us",
        href:"./aboutus.html"
    }
]; 

//Array para agregar el HTML del menú que vamos a agregar
let menuCat = [];

//Recorremos el arreglo para crearle a cada item un HTML
for (let item of categorias) {
    menuCat.push(`
      <li class="nav-item">
           <a class="nav-link" href="${item.href}">${item.nombre}</a>
      </li>
    `)
} 

//Estructura de nuestro menú
let menu =`
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tienda</a>
        <ul class="navbar-nav">
            ${menuCat.join('')}
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
</nav>`;

//Lo insertamos al DOM
document.querySelector("header").innerHTML = menu.join('');