
var a = document.querySelectorAll('#btn');
console.log(a);
var array_pessoas = [];
var array_tarefas = [];
var array_emails = [];


// Eventos:

for (n in a){

    addEventListener('click',function(event){

        event.preventDefault();


    });

}

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

function cadastraPessoa(){

    var inputNome= document.querySelector("#nome");
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

    let dados = document.getElementById("tabela1")
    dados. classList. remove('invisivel');
    dados. classList. add('fadein');


    


}

function cadastraTarefa(){

    var inputTarefas= document.querySelector("#tarefas");
    var tarefa= inputTarefas.value; 
    array_tarefas.push(tarefa);

   

    var tabela = document.querySelector("#tabela_tarefa");
    var linhas = document.createElement("tr");

    var tdtarefa = document.createElement("td");
    tdtarefa.textContent = tarefa;

    
    tabela.appendChild(linhas);
    linhas.appendChild(tdtarefa);
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
    tabela1 = document.getElementById("pessoa");
    tabela2 = document.getElementById("tarefa");

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

    

    
    
    
    











   








