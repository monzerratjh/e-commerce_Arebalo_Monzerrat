function sprint1 (){

const h1 = document.querySelector("h1");
h1.innerText = "Productos"; //le da valor al h1

let cardsArray = []; //creamos un arreglo en dónde poner las cards
for (let i = 1; i < 10; i++) {
    cardsArray.push(`
        <div class="card" style="width: 18rem;">
         <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Producto ${i}">
         <div class="card-body">
           <h5 class="card-title">Card numero ${i}</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="./producto.html" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>
    `); //batiks para el contenido en diferentes líneas, ${i} para mostrar la posición/valor en el arreglo. 
  //seleccionamos para poder agregar la card en el container.
}
document.querySelector(".container").innerHTML = cardsArray.join(''); 
/*Si pusieramos "document.querySelector(".container").innerHTML = cardsArray.join('');" dentro del bucle, estaríamos modificando el 
contenido del contenedor en cada vuelta del ciclo. Por cada tarjeta nueva, estaríamos reemplazando todo el contenido del contenedor.*/
}
sprint1 ();

let botones = document.querySelectorAll('.btn-primary'); //al tener dos tipos de clases podemos usar cualquiera de las dos, 
for (let i = 0; i < botones.length; i++) { //en este caso ".btn-primary" porque si ponemos solo la clase btn, se cambia el de la navbar.
    botones[i].innerText = 'Ver más';
}

