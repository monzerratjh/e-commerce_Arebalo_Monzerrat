//DATOS de MOCKAROO

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
  },
  {
      id: 4,
      titulo: "Producto 4",
      detalle: "Descripción del producto 4.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
  },
  {
      id: 5,
      titulo: "Producto 5",
      detalle: "Descripción del producto 5.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
  },
  {
      id: 6,
      titulo: "Producto 6",
      detalle: "Descripción del producto 6.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
  },
  {
      id: 7,
      titulo: "Producto 7",
      detalle: "Descripción del producto 7.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
  },
  {
      id: 8,
      titulo: "Producto 8",
      detalle: "Descripción del producto 8.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
  },
  {
      id: 9,
      titulo: "Producto 9",
      detalle: "Descripción del producto 9.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
  }
];

// FUNCIÓN que muestra el DETALLE del producto pedido
function mostrarDetalleProducto(id) {
  const producto = data.find(prod => prod.id === id);
  const productDetail = document.querySelector('#product-detail');
  
  /*Si se encontró el producto se muestra la información del producto.*/ 
  if (producto) {
      productDetail.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.titulo}" style="height: 200px; width: 350px;">
          <h2>${producto.titulo}</h2>
          <p>${producto.detalle}</p>
          <p>Precio: $${producto.precio}</p>
          <p>Stock: ${producto.stock}</p>
      `;
  } else {
      // Muestra todos los productos si no se encuentra el específico
      // map: para recorrer cada producto en la lista y crear una card para cada uno
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
}


const urlParams = new URLSearchParams(window.location.search); //convierte esos parámetros en un objeto que nos permite leer los valores individuales.
const prodId = parseInt(urlParams.get('prod')); //busca el valor del parámetro prod en la URL.
mostrarDetalleProducto(prodId);
