const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++) {
    
    const paciente = pacientes[i];
    
    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector (".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc")

    const Colortext = "red"

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 300) {
        console.log("Peso invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaValida && pesoValido){
        const imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (imc);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = documen.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);

});


