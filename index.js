const h1 = document.querySelector(".h1Main");
h1.innerText = "Productos";

let cardsArray = [];
for (let i = 1; i < 10; i++) {
    cardsArray.push(` 
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Tarjeta numero ${i}.</p>
            </div>
        </div>
    `); //batiks para el contenido en diferentes líneas, ${i} para mostrar la posición/valor en el arreglo. 
    let container = document.querySelector(".container"); //seleccionamos para poder agregar la card.
    
    /*container = document.querySelector(“.container”).append = “<div>...</div>”;?????????????????????*/

    console.log("Intento " + i + "para ver si funciona");
}