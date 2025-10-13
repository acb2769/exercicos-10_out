/*
28. Acesso a Recursos: Um usuário pode acessar o recurso X se ele for do grupo A E não estiver banido, 
OU se ele for do grupo B.

grupo = 'B', isBanido = true

Resultado esperado: true ou false?
*/

let grupo = 'B'
let isBanido = true

let validarRecurso= true ? (grupo === 'A' && isBanido === false) || grupo === 'B' : validarRecurso = false 
 
console.log('validarRecurso: ', validarRecurso)
console.log('Pertence Grupo A e  não é banido: ', grupo, isBanido)
console.log("Pertence ao grupo B? :", grupo)