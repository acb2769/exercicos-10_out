/*
8 - Agendamento de Evento: Um evento pode ser agendado 
se a data for no futuro e o local tiver capacidade 
suficiente para 50 pessoas.
isDataFutura = true, capacidadeLocal = 45

Resultado esperado: true ou false?

*/

let DataFutura = true
let CapacidadeLocal = 45
let validar = true ? (DataFutura == true) && (CapacidadeLocal == 50) : validar = false

console.log("Resultado esperado: ", validar);
console.log("Data futura?: ", DataFutura);
console.log("Capacidade suficiente 50 pessoas?: ", CapacidadeLocal);
