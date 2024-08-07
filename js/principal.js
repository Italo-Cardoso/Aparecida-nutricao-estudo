const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const paciente = document.querySelector("#primeiro-paciente , #segundo-paciente");

const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = paciente.querySelector (".info-altura");
const altura = tdAltura.textContent;

const tdImc = paciente.querySelector(".info-imc")

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 300) {
    console.log("Peso invalido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura invalida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaValida && pesoValido){
    const imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
