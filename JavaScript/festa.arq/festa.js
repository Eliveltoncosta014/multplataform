// variaveis 
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resut");
const message = document.getElementById("message");

// função 

function resultadoIdadeClick(idade){
    event.preventDefault()
    if(inputIdade.value >=18){
        resultado.innerHTML=" voce pode ir para a festa";
        message.style.display="block";

  }
  }else{


message.style.direction="none";
// logica - condições 
    if (inputIdade.value >=18)
        resultado.innerHTML="voce não pode ir para a festa";

