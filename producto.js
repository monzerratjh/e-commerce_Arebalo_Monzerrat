class producto {
    constructor (titulo, detalle, precio, stock, imagen) {
      this.titulo = titulo;
      this.detalle = detalle;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
    }
}

const producto101 = new producto (
    "The queen is dead", 
    "A few details", 
    123, 
    23, 
    "http: nose");
    
let etiquetasProducto = `
    <div class= "producto">
     <h5 class="productoTitulo"> ${producto.titulo} </h5> 
     <p> ${producto.detalle}</p> 
     <p>Precio: ${producto.precio}</p> 
     <p>Stock disponible: ${producto.stock}</p> 
     <img src="${producto.imagen}" alt="alternative text"></img>
    </div>`;

    const main = document.querySelector("main");
    main.innerHTML = etiquetasProducto;

    //const producto101 = new producto ("The queen is dead", "A few details", 123, 23, "http: nose");