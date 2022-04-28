/* Solicita al usuario que elija entre la opción 1 o 2:
Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
*/
let opcion1 = () => {
  var n1 = parseInt(prompt('n1'));
  var n2 = parseInt(prompt('n2'));
  if (n1 % 2 == 0 && n1 % 7 == 0) {
    alert('El primero numero es par, y multiplo de 7');
  } else if (n2 % 2 == 0 && n2 % 7 == 0) {
    alert('Segundo numero es par, y multiplo de 7');
  } else if (n1 % 2 == 0 && n1 % 7 == 0 && n2 % 2 == 0 && n2 % 7 == 0) {
    alert('Los numeros son pares, y multiplos de 7');
  } else {
    alert('Ninguno de ellos es par y multiplo de 7 a la vez');
  }
};

//Se le debe pedir una palabra y comprobar si empieza o termina por a.

let opcion2 = () => {
  var palabra = prompt('Introduce una palabra : ');

  if (palabra[0] === 'a') {
    alert('Empieza por a');
  } else if (palabra[palabra.length - 1] === 'a') {
    alert('La palabra termina por a');
  }
};
