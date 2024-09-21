/*
5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 
*/

var string="Teste",stringInvertida="", tamanho=string.length;

for(let i=0;i<tamanho;i++){
    stringInvertida += string[tamanho-1-i];
}

console.log("String original: " + string);
console.log("String invertida: " + stringInvertida);