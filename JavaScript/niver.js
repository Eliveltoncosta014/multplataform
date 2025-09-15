function diasParaNiver(){
    const hoje = new Date();

    const diaSemana = hoje.getDay();// 0=Dom, 1=seg, ...,4=quin
    let diasFaltando = 4-diaSemana;

    if(diasFaltando <0 ) 
        diasFaltando += 7;
    
    document.getElementById ("dias"). textContent= diasFaltando;
}
function atualizarhora(){
    const horaHtml= document.getElementById("hora");
    const agora= new Date();
    const hora= agora.getHours().toString().padStart(2, '0');
    const minutos= agora.getMinutes().toString().padStart(2, '0');
    const segundos= agora.getSeconds().toString().padStart(2, '0');

    console.log(typeof hora)


    horaHtml.textContent = `${hora}:${minutos}:${segundos}`;


}
diasParaNiver();

// chamar funções 

diasParaNiver();

setInterval(atualizarhora, 1000);

atualizarhora();