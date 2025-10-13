/*
26. Condição de Vitória no Jogo: O jogador venceu se sua pontuação for maior que 100 E 
ele não tiver cometido faltas.

pontuacao = 110, teveFaltas = false

Resultado esperado: true ou false?
*/

let pontuacao = 110
let teveFaltas = false

let validarVitoria = true ? pontuacao > 100 && teveFaltas === false : validarVitoria = false 
 
console.log('Resposta esperada: ', validarVitoria)
console.log('Pontuacao > 100?: ', pontuacao)
console.log("Cometeu faltas? :", teveFaltas)