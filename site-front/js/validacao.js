const form = document.getElementById("newForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.querySelector("#email").value.trim();

    
        //Condição de validação 
        if(email == "") {
            alert("Por favor, insira um e-mail");
            return false;
        }
        // vlaidação simples : tem @ e .
        if (!email.includes("@") || !email.includes(".")){
            alert("Email invalido. Tente novamente");
            return;
        }

        alert("alert cadastrado com Sucesso! 📩");

      
        // limpar o campo 
        form.reset();

    });
