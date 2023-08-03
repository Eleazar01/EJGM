function array(){
    let arr = [];
    arr = document.formulario.cadena.value.split(" ");
    document.write(arr.length + "<br/>");
    document.write(arr[0] + "<br/>");
    document.write(arr[arr.length-1] + "<br/>");
    // document.write(arr.shift + "<br/>");
    // document.write(arr.pop + "<br/>");
}