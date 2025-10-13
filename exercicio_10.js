/*
10 - Acesso à Página: O usuário tem acesso a uma página restrita 
se ele for um assinante OU um convidado VIP.
isAssinante = false, isConvidadoVIP = true

Resultado esperado: true ou false?

*/

let Assinante = false; 
let ConvidadoVIP = true; 

let validar = true ? (Assinante == true || ConvidadoVIP == true) : validar = false

console.log("Usuário tem acesso a Página?", validar);
console.log("É Assinante?", Assinante);
console.log("É Convidado VIP?", ConvidadoVIP);

