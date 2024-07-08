// ALT +  Z ajusta a visualização!!!!

alert("Boas vindas ao jogo do número secreto!"); 
// Math random gera um número entre 0 e 1.
// Multiplico por 0 para correr a vírgula uma vez para a direita.
// Coloco o parse int para pegar só a parte inteira (antes da vírgula) do número.
// + 1 para que o 10 seja incluído
let valorMaximo = 4;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;

let numeroChute;

while(numeroChute != numeroSecreto){
    numeroChute = prompt(`Digite o número secreto entre 0 e ${valorMaximo}:`);
    
    if(numeroSecreto == numeroChute){
        break;
    }
    else{
        if(numeroSecreto>numeroChute){
            alert(`Número secreto maior que ${numeroChute}`);
        }
        else{
            alert(`Número secreto menor que ${numeroChute}`);
        }
    }
    tentativas ++;
}

// Operador ternário - PRECISO TREINAR MAIS ELE
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
