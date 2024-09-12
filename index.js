const h1 = document.querySelector("h1");
h1.innerText = "Productos"; //le da valor al h1

let cardsArray = []; //creamos un arreglo en dónde poner las cards
for (let i = 1; i < 10; i++) {
    cardsArray.push(`
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Tarjeta numero ${i}.</p>
            </div>
        </div>
    `); //batiks para el contenido en diferentes líneas, ${i} para mostrar la posición/valor en el arreglo. 
     //seleccionamos para poder agregar la card en el container.
}
document.querySelector(".container").innerHTML = cardsArray.join(''); 
/*Si pusieramos "document.querySelector(".container").innerHTML = cardsArray.join('');" dentro del bucle, estaríamos modificando el 
contenido del contenedor en cada vuelta del ciclo. Por cada tarjeta nueva, estaríamos reemplazando todo el contenido del contenedor.*/

