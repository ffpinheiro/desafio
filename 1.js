/* 
1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 
*/
INDICE = 13, SOMA = 0, K = 0;
while(K < INDICE){ K = K + 1; SOMA = SOMA + K; }console.log(SOMA);
//Resposta: 91, pois a soma será executada enquanto k for menor que o índice (que tem o valor 13 atribuído). A conta acaba sendo 1+2+3+4+5+6+7+8+9+10+11+12+13, dentro da estrutura de repetição e sempre alterando o valor da variável soma.