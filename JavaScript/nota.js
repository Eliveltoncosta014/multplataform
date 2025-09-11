// variaveis 
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const message= document.getElementById("message");

//função 
function resultadoNotaClick(event) {
    event.preventDefault()
    if(inputNota.value ==""){
        message.style.display="block";
        return false;

    }
    message.style.direction= "none";
    // logica - Condição 
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";

    } else {
        resultado.innerHTML = "Reprovado";

    }

    inputNota.value = "";
}