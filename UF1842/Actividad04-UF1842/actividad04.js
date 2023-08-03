console.log("Introduce el número de niños");
var niños = parseInt(prompt("Introduce el número de niños"));

console.log("Introduce el número de niñas")
var niñas = parseInt(prompt("Introduce el número de niñas"));

var tniños = niños*100/(niños+niñas);
var tniñas = 100-tniños;

console.log("Hay un "+tniños+" % de niños");
console.log("Hay un "+tniñas+" % de niñas");


// var totalniños = niños + niñas;
// var porcentninos = (niños*100)/totalniños;
// var porcentninas = (niñas*100)/totalniños;
// console.log("El porcentaje de niños es "+ porcentninos);
// console.log("El porcentaje de niñas es "+ porcentninas);
