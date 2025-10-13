/*
6 - Disponibilidade de Produto: Um produto pode ser adicionado ao carrinho
 se o estoque for maior que 0 e o produto não estiver em promoção.
estoque = 10, emPromocao = true

Resultado esperado: true ou false?

*/

let estoque = 10
let emPromocao = true
//let validar = true ? estoque > 0 && emPromocao !== true : validar = false

if (estoque > 10 || emPromocao !== true){
    (validar = true)
    console.log('Produto pode ser adicionado ao carrinho')}
else{
    (validar = false)
    console.log('Produto não pode ser adicionado ao carrinho')}

console.log("Resultado esperado: ", validar);
console.log("estoque > 0?: ", estoque);
console.log("produto em promocao?: ", emPromocao);
