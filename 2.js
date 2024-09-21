/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 


IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/
var n=21;
let anterior=0, atual=1, proximo=1, pertence=false;
while(atual<n){
    proximo=anterior+atual;
    anterior=atual;
    atual=proximo;
    if(n==atual){
        pertence = true;
    }
}
if(pertence){
    console.log("O número digitado pertence à sequência de Fibonacci");
}else{
    console.log("O número digitado não pertence à sequência de Fibonacci");
}