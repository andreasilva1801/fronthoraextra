function carregaInfoColab(){
    // recupero do LocalStorage aquilo que eu armazenei
    var strUser = localStorage.getItem("userHE");
    // vou converter essa string para um objeto e manipulá-lo
    var objUser = JSON.parse(strUser);

    var img = `<img src="${objUser.linkFoto}" width="100%">`;
    var info = `Nome : ${objUser.nome} <br>
                RACF : ${objUser.racf} <br>
                Email: ${objUser.email} <br>`;

    document.getElementById("imgUsuario").innerHTML = img;
    document.getElementById("infoUsuario").innerHTML = info;
}

function logout(){
    localStorage.removeItem("userHE");
    window.location = "index.html";
}