// Datos obtenidos a través Mockaroo
const data = [
  {
      id: 1,
      titulo: "Ferrari F80",
      detalle: "El nuevo supercar del Cavallino Rampante",
      precio: 199.99,
      stock: 10,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/670f682d57a595000f7361a6-ferrari-f80-dynamics-cover-new-desk?width=1440&height=900",
      category: "ferrari"
  },
  {
      id: 2,
      titulo: "Producto 2",
      detalle: "Descripción del producto 2.",
      precio: 299.99,
      stock: 5,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
      category: "mclaren"
  },
  {
      id: 3,
      titulo: "Honda NSX Type R",
      detalle: "La fusión perfecta de la ingeniería japonesa y la pura emoción de la pista.",
      precio: 149.99,
      stock: 15,
      imagen: "https://i.ytimg.com/vi/4qQCSaAGgLA/maxresdefault.jpg",
      category: "honda"
  },
  {
      id: 4,
      titulo: "Ferrari F40",
      detalle: "Un legado imperecedero.",
      precio: 149.99,
      stock: 15,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5de79b73b6285a70bc7d046f-ferrari-f40-1987-design-focus-4?width=1920&height=1080",
      category: "ferrari"
  },
  {
      id: 5,
      titulo: "Producto 5",
      detalle: "Descripción del producto 5.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
      category: "mclaren"
  },
  {
      id: 6,
      titulo: "Honda S2000",
      detalle: "Un clásico de los 2000.",
      precio: 149.99,
      stock: 15,
      imagen: "https://bringatrailer.com/wp-content/uploads/2023/12/2007_honda_s2000_2007_honda_s2000_3071737a-36ff-488d-887d-9542f2c9ba0c-hq0tor-19568-01739.jpg",
      category: "honda"
  },
  {
      id: 7,
      titulo: "LaFerrari",
      detalle: "El proyecto ferrari más ambicioso.",
      precio: 149.99,
      stock: 15,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5d95ce7de4a573784c178945-ferrari-laferrari-2013-chassis-focuson-desktop?width=1920&height=1080",
      category: "ferrari"
  },
  {
      id: 8,
      titulo: "Producto 8",
      detalle: "Descripción del producto 8.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
      category: "mclaren"
  },
  {
      id: 9,
      titulo: "Honda Acura NSX",
      detalle: 'Conocido como el "Anti Ferrari"',
      precio: 149.99,
      stock: 15,
      imagen: "https://bringatrailer.com/wp-content/uploads/2016/11/DSC_0171.jpg?fit=1613%2C1080",
      category: "honda"
  }
];

// FUNCIÓN PARA MOSTRAR LAS CARDS EN EL MAIN
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
    products.forEach(product => {
      productList.innerHTML += `
        <div class="card">

          <div class="image-box">
            <img src="${product.imagen}" alt="${product.titulo}">
          </div>

            <div class="card-body">
              <h5 class="card-title">${product.titulo}</h5>
              <p class="card-text">${product.detalle}</p>
              <p>Precio: $${product.precio.toFixed(2)}</p>
              <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
          </div>
        </div>
        
      `;
    });
  }
  
  // Cargamos los productos inicialmente
  displayProducts(data);
  
  // FUNCIÓN DE FILTRADO POR CATEGORÍA
  const filterByCategory = (category) => {
    const filteredData = category === "todos" ? data : data.filter(product => product.category === category);
    displayProducts(filteredData);
  };
  
  // EVENTOS de botones de CATEGORÍA
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => filterByCategory(button.dataset.category));
  });
  
  // CAPTURAR EL BOTÓN DE BÚSQUEDA Y EL INPUT
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clear-button');
  
  // Evento del searchButton
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(product => product.titulo.toLowerCase() === searchTerm);
  
    // Comprobamos si hay productos filtrados, sino, muestra todos los productos
    if (filteredData.length > 0) {
      displayProducts(filteredData);
    } else {
      alert("No se encontraron productos.");
      displayProducts(data);
    }
  });
  
  // Evento que limpia el buscador
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    displayProducts(data); // Volver a mostrar todos los productos
  });