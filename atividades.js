// Atividades do curso

/*
if(tentativas > 1){
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}
else{
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}

/*
alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt("Digite seu nome");
idade = prompt("Digite sua idade");

if(idade >= 18){
    alert("Pode tirar a habilitação, " + nome + "!")
}

/*****************************************/
/*
let diaDaSemana = prompt("Qual o dia da seman?");
if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    alert("Bom fim de semana!");
}
else{
    alert("Boa semana");
}
/*****************************************/

/*****************************************/
/*
let sinalNumero = prompt("Digite um número:");
if(sinalNumero < 0){
    alert("Número negativo");
}
else {
    alert("Número positivo");
}
/*****************************************/

/*****************************************/
/*let pontuacaoJogo = prompt("QUal a sua pontuação no jogo?");
if(pontuacaoJogo >= 100){
    alert("Parabéns, você venceu!");
}
else{
    alert("Tente novamente para ganhar!");
}
/*****************************************/

/*****************************************/
/*
let saldoConta = 4000;
alert(`O saldo da sua conta é ${saldoConta}`);

let nomeUsuario = prompt("Qual seu nome?");
alert("Bem-vindo " + nomeUsuario + "!");
*/
/*****************************************/

/*
let contador = 1;
while(contador <= 10){
    alert(`Contador: ${contador}`);
    contador ++;
}
/*****************************************/

/*
let contador2 = 10;
while(contador2 >= 1){
    alert(`Contador2: ${contador2}`);
    contador2 --;
}
/*****************************************/

/*
let contagemRegressiva = 3;
while(contagemRegressiva >= 1){
    alert(` foguete irá partir em: ${contagemRegressiva}`);
    contagemRegressiva --;
}
alert("O FOGUETE PARTIU!!!");
/*****************************************/

/*
let contador3 = 0;
let numeroUsuario = prompt("Digite um número:");
while(contador3 <= numeroUsuario){
    alert(contador3);
    contador3++;
}
/*****************************************/

/*
console.log("Bem-vindo(a) ao jogo!");

/*****************************************/

/*
let nome = "Kelly Mac";
console.log(`Olá, ${nome}!`);

/*****************************************/

/*
alert(`Olá, ${nome}!`);

/*****************************************/

/*
let lingugemFavorita = prompt("Qual a lingugem de programação que você mais gosta?");
console.log(lingugemFavorita);

/*****************************************/

/*
let valor1 = 3,
    valor2 = 7,
    resultado;

resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

/*****************************************/

/*
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

/*****************************************/

/*
idade = prompt("Digite sua idade:");
if(idade < 18){
    console.log("Você é menor de idade...");
}
else{
    console.log("Você já é amior de idade!");
}

/*****************************************/

/*
let numero = prompt("Digite um número:");
if(numero < 0){
    console.log("Número negativo");
}
else if (numero > 0){
    console.log("Número positivo");
}
else{
    console.log("Número zero");
}

/*****************************************/

/*
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador ++;
}

/*****************************************/
 
/*
let nota = 10;
if(nota >= 7){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

/*****************************************/

/*
let numeroAleatorio = parseInt(Math.random() * 5);
console.log(numeroAleatorio);

/*****************************************/

/*
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

/*****************************************/

/*
let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);

/*****************************************/