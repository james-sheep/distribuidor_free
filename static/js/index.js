alert("A funcionalidade enviar e-mail ainda está em desenvolvimento")


document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
});

document.getElementById('btn2').addEventListener('click',function(event){
    event.preventDefault();
});

document.getElementById('btn3').addEventListener('click',function(event){
    event.preventDefault();
});



var array_pessoas = [];
var array_tarefas = [];
var array_emails = [];



var tabela = document.querySelector("#NomeEmail");
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    identificaTarget = event.target;
    itemExcluir = identificaTarget.textContent;
    console.log(itemExcluir)
    array_pessoas.splice(array_pessoas.indexOf(itemExcluir), 1);

});


var tabelat = document.querySelector("#tabela_tarefa");
tabelat.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    identificaTarget = event.target;
    itemExcluir = identificaTarget.textContent;
    console.log(itemExcluir)
    array_tarefas.splice(array_tarefas.indexOf(itemExcluir), 1);




});

//Funções:

function verificaBranco(){

    var inputNome= document.getElementById("nome");
    var inputEmail = document.getElementById("email");
    var email = inputEmail.value;
    var nome = inputNome.value; 
    if (nome || email == " "){

        return true


    }

    return false
}
var verificaBranco = verificaBranco()


console.log(verificaBranco);

function cadastraPessoa(){

   
    if  ( verificaBranco == false) {

        return alert( "Nenhum campo pode ficar em branco")

    }

        var inputNome= document.getElementById("nome");
        var inputEmail = document.getElementById("email");
        var email = inputEmail.value;
        var nome = inputNome.value; 
    
        array_pessoas.push(nome);

        var inputEmail = document.querySelector("#email");
        var email = inputEmail.value;
        array_emails.push(email);

        var tabela = document.querySelector("#NomeEmail");
        var linhas = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.textContent = nome;

        var tdEmail = document.createElement("td");
        tdEmail.textContent = email;
        
        tabela.appendChild(linhas);
        linhas.appendChild(tdNome);
        linhas.appendChild(tdEmail);


        capturaNomeInput = document.getElementById("nome");
        capturaEmailInput = document.getElementById("email");
        
        capturaNomeInput.value = " ";
        capturaEmailInput.value = " ";

        let listaDeEmail = document.getElementById("listaDeEmail");
        listaDeEmail.value = array_emails;
        console.log(array_emails);

        let dados = document.getElementById("tabela1")
        dados.classList.remove('invisivel');
        dados.classList.add('fadein');

          
        
} 



function cadastraTarefa(){

    var inputTarefas= document.querySelector("#tarefas");
    var tarefa= inputTarefas.value; 
    
    if  ( tarefa == " ") {

        return alert( "Nenhum campo pode ficar em branco")
    }
   
   
    array_tarefas.push(tarefa);

   

    var tabela = document.querySelector("#tabela_tarefa");
    var linhas = document.createElement("tr");

    var tdtarefa = document.createElement("td");
    tdtarefa.textContent = tarefa;

    
    tabela.appendChild(linhas);
    linhas.appendChild(tdtarefa);

    capturaTarefaInput = document.getElementById("tarefas");
    
    capturaTarefaInput.value = " ";


    let dados = document.getElementById("tabela2")
    dados. classList. remove('invisivel');
    dados. classList. add('fadein');

  

}

function embaralhaTudo(lista){
    
    this.lista = lista;

    for (let indice= lista.length; indice; indice--){

        const indiceAleatorio= Math.floor(Math.random()* indice);
        const elemento = lista[indice-1];
        lista[indice-1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;

   }
    }

function Resultado(){

    embaralhaTudo(array_pessoas);
    embaralhaTudo(array_tarefas);

    console.log(array_pessoas);
    console.log(array_tarefas)
    
    
    let listaDePessoas = document.getElementById("listaDePessoas");
    listaDePessoas.value = array_pessoas;
    let listaDeTarefas = document.getElementById("listaDeTarefas");
    listaDeTarefas.value = array_tarefas;

if (array_pessoas.length == 0){

    return alert( "Nenhum campo pode ficar em branco")

}

if (tarefas.length == 0){

    return alert( "Nenhum campo pode ficar em branco")

}


    for( i=0; i<array_pessoas.length; i++){

        linha1 = document.createElement("tr");
        pessoa = document.createElement("td");
        pessoa.textContent= array_pessoas[i];
        tabela1.appendChild(linha1);
        linha1.appendChild(pessoa);


    }

    for( i=0; i<array_tarefas.length; i++){

        linha2 = document.createElement("tr");
        tarefa = document.createElement("td");
        tarefa.textContent= array_tarefas[i];
        tabela2.appendChild(linha2);
        linha2.appendChild(tarefa);


    }

    let dados = document.getElementById("tabela3")
    dados. classList. remove('invisivel');
    dados. classList. add('fadein');
    
    let dados2 = document.getElementById("tabela4")
    dados2. classList. remove('invisivel');
    dados2. classList. add('fadein');













}

    

    
    
    
    











   








