//Adicionando função ao botão
function verificarEstoque(){

//Solicitando o nome do vinho ao usuário. 
var nomeDoVinho = prompt("Insira o nome do vinho.")
//Caso o usuário não insira o nome do vinho, solicite novamente.
if (nomeDoVinho == "") {
    alert("O nome do vinho não foi inserido. Insira novamente.")
    var nomeDoVinho = prompt("Insira o nome do vinho.")
}
//Cadastrando o nome do vinho no console.
console.log("-Nome do vinho:", nomeDoVinho)

//Solicitando o tipo de vinho ao usuário. 
var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
//Caso o usuário não insira o tipo de vinho, solicite novamente.
if (tipoDeVinho == "") {
    alert("O tipo de vinho não foi inserido. Insira novamente.")
    var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
}
//Caso o usuário não insira um dos três tipos de vinho, solicite novamente.
else if (tipoDeVinho != "tinto" && tipoDeVinho != "branco" && tipoDeVinho != "rosé" && tipoDeVinho != "Tinto" && tipoDeVinho != "Branco" && tipoDeVinho != "Rosé" ){
    alert("Tipo não encontrado. Insira um tipo válido.")
    var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
//Cadastrando o tipo de vinho no console.
}
console.log("-Tipo de vinho:", tipoDeVinho)

//ADICIONANDO A VAR. DA SAFRA
var safraAno = prompt("Qual a safra do vinho?");
//ADICIONANDO A INFORMAÇÃO DA VAR. NO CONSOLE
console.log(`-Safra: ${safraAno}`);
//ADICIONANDO A VAR. DO ESTOQUE
var estoque = prompt("Quantidade no estoque?");
//ADICIONANDO A INFORMAÇÃO DA VAR. NO CONSOLE
console.log(`-Estoque: ${estoque}`);
//ADICIONANDO A CONDIÇÃO IF CASO O ESTOQUE SEJA MENOR QUE 5
if (estoque < 5){
    //ADICIONANDO A INFORMAÇÃO QUE O ESTOQUE ESTÁ BAIXO NO CONSOLE
    console.log("ESTOQUE BAIXO");
}
//ADICIONANDO IF PARA CASO A SAFRA SEJA DE 2020 PARA CIMA E CONDIÇÃO PARA SABER SE O VINHO É JOVEM
if (safraAno >= 2020){ 
    var idade = 'Vinho jovem';
    //ALERT PARA VER AS INFORMAÇÕES DO VINHO NO CONSOLE
    alert("A seguir, veja as informações no console.");
}
//ADICIONANDO ELSE IF PARA CASO A SAFRA SEJA DE 2015 A 2019 E CONDIÇÃO PARA SABER SE O VINHO É AMADURECIDO
else if (safraAno >= 2015){
    var idade = 'Vinho Amadurecido';
    //ALERT PARA VER AS INFORMAÇÕES DO VINHO NO CONSOLE
    alert("A seguir, veja as informações no console.");
}
//ADICIONANDO ELSE IF PARA CASO A SAFRA SEJA MENOR QUE 2015 E CONDIÇÃO PARA SABER SE O VINHO É ANTIGO
else if (safraAno < 2015){
    var idade = 'Vinho Antigo';
    //ALERT PARA VER AS INFORMAÇÕES DO VINHO NO CONSOLE
    alert("A seguir, veja as informações no console.");
}
//MOSTRANDO AS INFORMAÇÕES NO CONSOLE
console.log(`-Nome: ${nomeDoVinho}\n-Tipo: ${tipoDeVinho}\n-Safra: ${safraAno}\n-Estoque: ${estoque}\n-Idade: ${idade}`);
}