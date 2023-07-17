console.log("Introduce el número de niños");
var niños = parseInt(prompt("Introduce el número de niños"));
console.log("Introduce el número de niñas")
var niñas = parseInt(prompt("Introduce el número de niñas"));
var tniños = niños*100/(niños+niñas);
var tniñas = 100-tniños;
console.log("Hay un "+tniños+" % de niños");
console.log("Hay un "+tniñas+" % de niñas");