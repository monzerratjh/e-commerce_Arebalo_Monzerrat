  // DECLARAMOS VARIABLES 
const submitLogin = document.querySelector("#loginForm");
const message = document.querySelector("#formLoginMessage");

const handSubmit = ev => {
    ev.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario
    let emailForm = ev.target.elements.email.value;
    let passwordForm = ev.target.elements.password.value;

    // Si las credenciales coinciden, guarda la sesión en localStorage y nos redirige al index
    if (emailForm === USER_LOGIN.email && passwordForm === USER_LOGIN.password) {
        localStorage.setItem("email", emailForm);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");
        location.href = "./index.html";
    } else {
        message.innerText("Por favor vuelva a introducir los datos."); // Muestra el mensaje de error como alerta
    }
};

// Vinculamos el evento de envío al formulario
submitLogin.addEventListener("submit", handSubmit);
