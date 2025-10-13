/*
4 - Desconto de Membro: O usuário tem direito a um desconto 
se ele for um membro  - E - o valor da compra for maior que R$ 100,00.
isMembro = true, valorCompra = 95

Resultado esperado: true ou false?

*/

let Membro = true
let valorCompra = 95
let validarMembro = false

if (valorCompra > 100 && Membro ==  true){
    (validarMembro = true)
    console.log('desconto OK')}
else{
    (validarMembro = false)
    console.log('desconto não OK')}

console.log("Resultado esperado: ", validarMembro);
console.log("Valor da Compra > R$100,00?: ", valorCompra);
console.log("Membro: ", Membro);