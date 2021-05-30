document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);
document.getElementById("multiplicar").addEventListener("click", multiplicar);
document.getElementById("dividir").addEventListener("click", dividir);
document.getElementById("factorial").addEventListener("click", factorial);
document.getElementById("cuadrado").addEventListener("click", cuadrado);

function sumar() {
    var n1 = parseFloat(document.getElementById("n1").value),
        n2 = parseFloat(document.getElementById("n2").value),
        r = document.getElementById("resultado");
    r.innerHTML = n1 + n2;
}

function restar() {

    var n1 = parseFloat(document.getElementById("n1").value),
        n2 = parseFloat(document.getElementById("n2").value),
        r = document.getElementById("resultado");
    r.innerHTML = n1 - n2;
}

function multiplicar() {

    var n1 = parseFloat(document.getElementById("n1").value),
        n2 = parseFloat(document.getElementById("n2").value),
        r = document.getElementById("resultado");
    r.innerHTML = n1 * n2;
}

function dividir() {

    var n1 = parseFloat(document.getElementById("n1").value),
        n2 = parseFloat(document.getElementById("n2").value),
        r = document.getElementById("resultado");
    r.innerHTML = n1 / n2;
}

function factorial(){

    var n1 = n2 = document.getElementById("n1").value;

    while (n1>1) {
            n2 = n2 * (n1-1);
            n1--;
        }
    r = document.getElementById("resultado");
    r.innerHTML = n2

}

function cuadrado(){

    var n1 = parseFloat(document.getElementById("n1").value),
        r = document.getElementById("resultado");

    r.innerHTML = n1 * n1;
}