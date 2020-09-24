function enviarDados(){
    var txtRacf = document.getElementById("txtRacf").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitados = "+txtRacf+" / "+txtSenha);

    // passo 1 = crio a variável do corpo da mensagem para o LOGIN
    var msgBody = {
        racf : txtRacf,
        senha : txtSenha
    };

    // passo 2 crio o cabeçalho dessa mensagem
    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "Content-type":"application/json"
        }
    };


    fetch("http://localhost:8088/usuarios/login", cabecalho)
         .then(res => console.log(res));



}