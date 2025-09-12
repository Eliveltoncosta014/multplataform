// variaveis 
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resut");
const message = document.getElementById("message");

// função 

function resultadoIdadeClick(event){
    event.preventDefault()
    if(inputIdade.value >=18){
        resultado.innerHTML=" voce pode ir para a festa";
        message.style.display="block";

  }
  else{
    resultado.innerHTML ="Voce nao pode ir na festa";
  }


  if(inputIdade.value ==""){
    message.style.display="block";
    return false
  }


message.style.direction="none";
inputIdade.value="";
// logica - condições 
}