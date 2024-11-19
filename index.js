// FUNCIÓN PARA MOSTRAR LAS CARDS EN EL MAIN
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
    products.forEach(product => {
      productList.innerHTML += `
      <div class="col-4">
              <div class="card">
                  <img src="${product.imagen}" class="card-img-top" alt="${product.titulo}">
                  <div class="card-body">
                      <h5 class="card-title">${product.titulo}</h5>
                      <p class="card-text">${product.detalle}</p>
                      <p>Precio: $${product.precio.toFixed(2)}</p>
                      <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                  </div>
              </div>
          </div>
      `;
    });
  }
  
  
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

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("well");
    }, 3000);
  });  

  promise.then(() => {
    displayProducts(data);
  });
