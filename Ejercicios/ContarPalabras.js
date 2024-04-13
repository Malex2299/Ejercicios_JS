function contarPalabras(frase) {
  var palabras = frase.split(" ");

  return palabras.length;
}


var frase = "Sigue asi vas bien";

var cantidadPalabras = contarPalabras(frase);
console.log(`La frase cuenta ${cantidadPalabras} palabras.`);
