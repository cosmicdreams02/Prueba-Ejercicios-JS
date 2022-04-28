//Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.

/* function contarpalabras() {
  //Solicitamos la frase al usuario.
  var frase = prompt('Introduce una frase : ');
  var numerodepalabras = frase.split(' ').length - 1;
  alert(numerodepalabras + 1);
} */

var contarpalabras = () => {
  var frase = prompt('Introduce una frase: ');
  var espacio = ' ';
  let contador = 1;

  for (let i = 1; i < frase.length; i++) {
    if (frase[i] == espacio) {
      contador++;
    }
  }

  alert('Hay ' + contador + ' palabras');
};
