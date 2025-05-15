//Adicionando função ao botão
function cadastrarProduto(){
var estoqueBaixo = 0;
var cadastros = 0;
var continuar = "Sim";
var todosNomes = "";
var todosTipos = ""; 
var todasSafras = ""; 
var todasIdades = "";

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
    var safraAno = prompt("Qual é a safra do vinho?");
    while(isNaN(safraAno) || safraAno == ''){
        alert("Por favor, insira o ano da safra!");
        var safraAno = prompt("Qual é a safra do vinho?");
    }
    //solicitando a quantidade do estoque
    var estoque = prompt("Digite a quantidade do estoque:");
    while(isNaN(estoque) || estoque == ''){
        alert("Por favor, coloque a quantidade de garrafas");
        var estoque = prompt("Digite a quantidade do estoque:");
    }
    if (estoque < 5){
    //ADICIONANDO A INFORMAÇÃO QUE O ESTOQUE ESTÁ BAIXO NO CONSOLE
        console.log("ESTOQUE BAIXO");
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

    todosNomes += nome + ", ";
    todosTipos += tipoDeVinho + ", ";
    todasSafras += safraAno + ", ";
    todasIdades += idade + ", ";

    var continuar = prompt("Você deseja cadastrar outro produto?");
    if (continuar != "Sim" && continuar != "sim"){
        alert("Produtos cadastrados, por favor verifique as informações no console.")
        //MOSTRANDO AS INFORMAÇÕES NO CONSOLE
        console.log(`-Nome: ${todosNomes}\n-Tipo: ${todosTipos}\n-Safra: ${todasSafras}\n-Idade: ${todasIdades}\n-Estoque: ${estoque}\n-Vinhos em estoque baixo: ${estoqueBaixo}\n-Cadastros: ${cadastros}`);
    }
}
}
