/*
23.	Notificação de Pedido: O cliente recebe uma notificação se o pedido foi enviado ou cancelado.
pedidoEnviado = false, pedidoCancelado = true
Resultado esperado: true ou false?
*/

let pedidoEnviado = false
let pedidoCancelado = true

let validarNotificacao = true ? pedidoEnviado == true || pedidoCancelado == true : validarNotificacao = false 
 
console.log('Resposta esperada: ', validarNotificacao)
console.log('Pedido Enviado?', pedidoEnviado)
console.log('Pedido Cancelado?', pedidoCancelado)