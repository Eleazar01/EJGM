// var op1 = prompt("Operador1");
// var op2 = prompt("Operador 2");
// document.write("El operador 1 es "+op1+" es "+typeof(op1)+"<br/>");
// document.write("El operador 2 es "+op2+" es "+typeof(op2)+"<br/>");
// var resultado = (op1+op2);
// document.write("El resultado de la suma es "+resultado+" es "+typeof(resultado)+"<br/>");
// resultado = (op1-op2);
// document.write("El resultado de la resta es "+resultado+" es "+typeof(resultado)+"<br/>");
// resultado = eval((op1+op2));
// document.write("El resultado de la suma con eval es "+resultado+" es "+typeof(resultado)+"<br/>");



function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}