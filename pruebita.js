let num = prompt('Elige un número del 1 al 3');
const random = Math.floor(Math.random() * 3);

switch(num) {
    case 1: 
      console.log("Acertaste!");
    break;
    case 2: 
      console.log("Acertaste!");
    break;
    case 3: 
      console.log("Acertaste!");
    break;
    default:
        console.log("Uh-Oh! No hagas trampa!");
    break;
}