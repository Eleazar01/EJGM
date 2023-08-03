function array() {
    let form = [];
    form.push(document.getElementById("codigo").value);

    form.push(document.getElementById("nombre").value);

    form.push(document.getElementById("edad").value);

    form.push(document.getElementById("email").value);

    form.push(document.getElementById("movil").value);

    form.push(document.getElementById("tipos").value);

    document.getElementById("resultado").innerHTML= form.join("<br/>");
}