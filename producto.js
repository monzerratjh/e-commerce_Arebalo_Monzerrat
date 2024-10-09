//Datos de MOCKAROO

const data = [
  {
    id: 1,
    title: "Forger, The",
    detail:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    img: "http://dummyimage.com/191x100.png/ff4444/ffffff",
    price: 98,
    stock: 75,
  },
  {
    id: 2,
    title: "Four Feathers, The",
    detail:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    img: "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
    price: 17,
    stock: 23,
  },
  {
    id: 3,
    title: "Island",
    detail:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    img: "http://dummyimage.com/117x100.png/ff4444/ffffff",
    price: 88,
    stock: 36,
  },
  {
    id: 4,
    title: "Outlander",
    detail:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    img: "http://dummyimage.com/124x100.png/ff4444/ffffff",
    price: 58,
    stock: 34,
  },
  {
    id: 5,
    title: "Polyester",
    detail:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    img: "http://dummyimage.com/137x100.png/cc0000/ffffff",
    price: 10,
    stock: 100,
  },
  {
    id: 6,
    title: "Wonderful World of the Brothers Grimm, The",
    detail:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    img: "http://dummyimage.com/126x100.png/cc0000/ffffff",
    price: 32,
    stock: 22,
  },
  {
    id: 7,
    title: "Steel",
    detail:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    img: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
    price: 3,
    stock: 84,
  },
  {
    id: 8,
    title: "Have Dreams, Will Travel",
    detail:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    img: "http://dummyimage.com/189x100.png/cc0000/ffffff",
    price: 6,
    stock: 75,
  },
  {
    id: 9,
    title: "Richard III",
    detail:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    img: "http://dummyimage.com/117x100.png/ff4444/ffffff",
    price: 50,
    stock: 62,
  },
];

//Extrae los parámetros de la URL después del signo ?. Obtiene el valor del parámetro prod en la URL.
const params = new URLSearchParams(window.location.search);
const productId = params.get('prod');

//Filtramos el producto correspondiente.
const producto = data.find(item => item.id == Number(productId));

//Verificamos si el producto existe con un if.
if (producto) {
    // Crear el HTML para mostrar los detalles del producto
    const productoHTML = `
      <div class="producto-detalle">
        <h1>${producto.titulo}</h1>
        <img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid">
        <p>${producto.detalle}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
      </div>
    `;

    document.querySelector('main').innerHTML = productoHTML;
  } else {
    // Si no se encuentra el producto, mostrar un mensaje
    document.querySelector('main').innerHTML = '<p>El producto no se ha encontrado</p>';
  }