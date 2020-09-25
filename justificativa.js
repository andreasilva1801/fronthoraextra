var ocorrencia;

function carregaInfos(){
    carregaListaAtividades();
    preencheDadosOcorrencia();
}

function carregaListaAtividades(){
    fetch("http://localhost:8088/atividades")
       .then(res=>res.json()).then(lista => preencheAtividades(lista));
}

function preencheAtividades(lista){
    var select=`<select class="form-control" id="selectAtividade">`;
    for (i=0;i<lista.length;i++){
        select = select + `<option value=${lista[i].id}>${lista[i].nomeAtividade}</option>`;
    }
    select = select + `<select>`;
    document.getElementById("divAtividades").innerHTML = select;
}

function preencheDadosOcorrencia(){
    var param = window.location.search;
    var numOcorrencia = param.substr(5);
    console.log("Numero da Ocorrencia = "+numOcorrencia);
    var url = "http://localhost:8088/ocorrencias/"+numOcorrencia;
    fetch(url)
      .then(res=>res.json()).then(oc => preencheCampos(oc));
}

function preencheCampos(oc){
    ocorrencia = oc;
    document.getElementById("txtData").value = oc.data;
    document.getElementById("txtNumHoras").value = oc.numHoras;
    document.getElementById("txtJustificativa").value = oc.descricao;
    
}