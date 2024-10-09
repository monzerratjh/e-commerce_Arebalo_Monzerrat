// Datos obtenidos a través Mockaroo
const data = [
    {
      id: 1,
      titulo: "Producto 1",
      detalle: "Descripción del producto 1.",
      precio: 199.99,
      stock: 10,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
    },
    {
      id: 2,
      titulo: "Producto 2",
      detalle: "Descripción del producto 2.",
      precio: 299.99,
      stock: 5,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
    },
    {
      id: 3,
      titulo: "Producto 3",
      detalle: "Descripción del producto 3.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
    }
  ];
  
  // Generamos las cards dinámicamente usando .map()
  const cardsHTML = data.map(producto => {
    return `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.detalle}</p>
          <p class="card-text">Precio: $${producto.precio}</p>
          <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;
  }).join('');
  
  // Insertar las cards en la sección del HTML
  document.querySelector('#product-cards').innerHTML = cardsHTML;
  