//Adicionando função ao botão
function cadastrarProduto(){
var estoqueBaixo = 0;
var cadastros = 0;
var continuar = "Sim";
var todosNomes = "";
var todosTipos = ""; 
var todasSafras = ""; 
var todasIdades = "";
var todosEstoques = "";
var idadeVelho = 9999999999999999;
var nomeVelho = "";

while (continuar == "Sim" || continuar == "sim") {
    cadastros++;
    //Solicitando o nome do vinho ao usuário. 
    var nome = prompt("Insira o nome do vinho.");
    while(!isNaN(nome) || nome == ''){
        alert("Por favor, digite um nome válido");
        var nome = prompt("Insira o nome do vinho.");
    }
    //Solicitando o tipo de vinho ao usuário. 
    var tipoDeVinho = prompt("Insira o tipo de vinho");
    //Caso o usuário não insira o tipo de vinho, solicite novamente.
    while(!isNaN(tipoDeVinho) || tipoDeVinho == ''){
        alert("Por favor, digite um tipo de vinho!");
        var tipoDeVinho = prompt("Insira o tipo de vinho");
    }
    //Solicitando a safra
    var safraAno = prompt("Qual é a ano da safra do vinho?");
    while(isNaN(safraAno) || safraAno == ''){
        alert("Por favor, insira o ano da safra!");
        var safraAno = prompt("Qual é a ano da safra do vinho?");
    }
    //solicitando a quantidade do estoque
    var estoque = prompt("Digite a quantidade do estoque:");
    while(isNaN(estoque) || estoque == ''){
        alert("Por favor, coloque a quantidade de garrafas");
        var estoque = prompt("Digite a quantidade do estoque:");
    }
    if (estoque < 5){
        console.log(`Vinho ${nome} está com estoque baixo`)
        estoqueBaixo++;
    }
    //ADICIONANDO IF PARA CASO A SAFRA SEJA DE 2020 PARA CIMA E CONDIÇÃO PARA SABER SE O VINHO É JOVEM
    if (safraAno >= 2020){ 
        var idade = 'Vinho jovem';
    }
    //ADICIONANDO ELSE IF PARA CASO A SAFRA SEJA DE 2015 A 2019 E CONDIÇÃO PARA SABER SE O VINHO É AMADURECIDO
    else if (safraAno >= 2015){
        var idade = 'Vinho Amadurecido';
    }
    //ADICIONANDO ELSE IF PARA CASO A SAFRA SEJA MENOR QUE 2015 E CONDIÇÃO PARA SABER SE O VINHO É ANTIGO
    else if (safraAno < 2015){
        var idade = 'Vinho Antigo';
    }
    if (safraAno < idadeVelho){
        idadeVelho = safraAno
        nomeVelho = nome
    }

    todosNomes += nome + ", ";
    todosTipos += tipoDeVinho + ", ";
    todasSafras += safraAno + ", ";
    todasIdades += idade + ", ";
    todosEstoques += estoque + ", ";

    var continuar = prompt("Você deseja cadastrar outro produto? Digite Sim para continuar, qualquer outro para parar.");
    if (continuar != "Sim" && continuar != "sim"){
        alert("Produtos cadastrados, por favor verifique as informações no console.")
        //MOSTRANDO AS INFORMAÇÕES NO CONSOLE
        console.log(`-Nome: ${todosNomes}\n-Tipos: ${todosTipos}\n-Safras: ${todasSafras}\n-Idades: ${todasIdades}\n-Estoque: ${todosEstoques}\n-Vinhos em estoque baixo: ${estoqueBaixo}\n-Cadastros: ${cadastros}`);
        console.log(`O vinho com a safra mais velha é ${nomeVelho} da safra ${idadeVelho}`);
    }
}
}
