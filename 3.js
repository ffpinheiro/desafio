/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 
*/
const fs = require('fs');

var menorValor=0,maiorValor=0,diasMedia=0,somaMedia=0;media=0,diasAcimaDaMedia=0;

fs.readFile('dados.json', 'utf8', (err, data) => {
    if(err){
        console.error("Erro ao ler o arquivo:",err);
        return;
    }
    
    const objeto = JSON.parse(data);

    //Cálculo de menor valor de faturamento em um dia
    //Observação: dias com faturamento igual a 0 foram desconsiderados
    menorValor = objeto[0].valor;
    objeto.forEach(dados => {
        if(dados.valor > 0 && dados.valor < menorValor){
            menorValor = dados.valor;
        }
    });
    //Cálculo de maior valor de faturamento em um dia
    objeto.forEach(dados => {
        if(dados.valor > maiorValor){
            maiorValor = dados.valor;
        }
    });
    //Cálculo do número de dias com faturamento acima da média
    objeto.forEach(dados => {
        if(dados.valor > 0){
            diasMedia++;
            somaMedia += dados.valor;
        }
    });
    media = somaMedia/diasMedia;
    objeto.forEach(dados => {
        if(dados.valor > media){
            diasAcimaDaMedia++;
        }
    });
    //Impressão de resultados
    console.log("Menor valor no mês: " + menorValor);
    console.log("Maior valor no mês: " + maiorValor);
    console.log("Dias com faturamento acima da média: " + diasAcimaDaMedia);
});