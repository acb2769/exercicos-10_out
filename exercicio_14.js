/*
14 - Disponibilidade de Serviço: O serviço está online 
se o servidor principal estiver ativo E 
não houver manutenção programada.
servidorAtivo = true, manutencaoProgramada = true

Resultado esperado: true ou false?
*/

let servidorAtivo = true
let manutencaoProgramada = true
let validar = true ? servidorAtivo == true && manutencaoProgramada !== true: validar = false 
 
console.log('Serviço online?', validar)
console.log('Servidor principal está ativo?', servidorAtivo)
console.log('Há manutenção programada?', manutencaoProgramada)