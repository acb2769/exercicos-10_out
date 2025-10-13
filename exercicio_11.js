/*
11 - Validação de Data: A data de entrega é válida 
se não for um feriado E não for um sábado ou domingo.
isFeriado = false, isFimDeSemana = true

Resultado esperado: true ou false?

*/

let Feriado = false; 
let FimDeSemana = true; 

let validar = true ? (Feriado !== true && FimDeSemana !== true) : validar = false

console.log("Resultado esperado: ", validar);
console.log("É feriado?", Feriado);
console.log("É Fim de Semana?", FimDeSemana);

