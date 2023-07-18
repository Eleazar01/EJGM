console.log("Introduce el primer número");
var x = parseInt(prompt("Introduce el primer número"));
console.log("Introduce el segundo número");
var y = parseInt(prompt("Introduce el segundo número"));

if (x>=y){
   
    if (x==y){
    console.log("Los números "+x +" y "+y+" son iguales");
    }else{
    console.log(x +" es el mayor de los dos");
    }   
}else{
    console.log(y +" es el mayor de los dos")
}

// if (x==y){
//     console.log("Los números "+x +" y "+y+" son iguales");
// }else if(x>y){
//     console.log(x +" es el mayor de los dos");
// }else if(x<y){
//     console.log(y +" es el mayor de los dos")
// }