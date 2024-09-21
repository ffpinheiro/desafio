/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
•	SP – R$67.836,43 
•	RJ – R$36.678,66 
•	MG – R$29.229,88 
•	ES – R$27.165,48 
•	Outros – R$19.849,53 

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var Outros = 19849.53;

var total = (SP+RJ+MG+ES+Outros);

console.log("Representação percentual de SP: " + ((SP/total)*100).toFixed(2) + "%");
console.log("Representação percentual de SP: " + ((RJ/total)*100).toFixed(2) + "%");
console.log("Representação percentual de SP: " + ((MG/total)*100).toFixed(2) + "%");
console.log("Representação percentual de SP: " + ((ES/total)*100).toFixed(2) + "%");
console.log("Representação percentual de SP: " + ((Outros/total)*100).toFixed(2) + "%");