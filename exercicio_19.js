/*
19.	Tempo de Resposta do Servidor: A requisição é considerada rápida 
se o tempo de resposta for menor que 100ms OU igual a 100ms.
tempoResposta = 100
Resultado esperado: true ou false?
*/

let tempoResposta  = 100; 
let validar = true

if (tempoResposta <= 100){
    console.log("Resposta rápida");
    validar = true}
else {
    console.log("Resposta não rapida");
    validar = false}

console.log("Resposta esperada", validar);


