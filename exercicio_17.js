/*
17.	Status do Pedido: Um pedido está pronto para envio 
se ele foi pago E o estoque de todos os itens é suficiente.
pedidoPago = true, estoqueSuficiente = false
Resultado esperado: true ou false?

*/

let pedidoPago = true
let estoqueSuficiente = false
let validar = true ? pedidoPago == true && estoqueSuficiente == true: validar = false 
 
console.log("Resposta esperada?", validar);
console.log("Pedido Pago?", pedidoPago);
console.log("Estoque de Pedidos suficiente?", estoqueSuficiente);