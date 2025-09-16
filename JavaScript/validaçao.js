const form = document.getElementById("newForm");

form.addEventListener("submit"), function(event){

    event.preventDefaut();

    const email = document.querySelector("#email").value;

    
        //Condição de validação 
        if(email == "") {
            alertt("Por favor, insira um e-mail");
            return false;
        }
        // vlaidação simples : tem @ e .
        if (email.includes("@")||!email.includes(".")){
            alert("Email invalido. Tente novamente")
            return;
        }

        alert("alert cadastrado com Sucesso! 📩");

      
        // limpar o campo 
        form.reset();

    };