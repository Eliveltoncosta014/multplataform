// variaveis 
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

//função 
function resultadoNotaClick(event){
    event.preventDefaut()

    console.log(inputNota.value);
    alert("Resultado");
// logica - Condição 
if (inputNota.value >=6){
    resultado.innerHTML="Aprovado";
   
}else{
    resultado.innerHTML="Reprovado";
   
}  

    inputNota.value="";
}