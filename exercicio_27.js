/*
27. Validação de Quantidade: A quantidade de um item no carrinho deve ser maior que 0 E
 menor ou igual ao estoque disponível.

quantidade = 5, estoque = 4

Resultado esperado: true ou false?
*/

let quantidade = 5
let estoque = 4

let validarQtdade = true ? quantidade > 0 && quantidade <= estoque : validarQtdade = false 
 
console.log('Resposta esperada: ', validarQtdade)
console.log('Quantidade  > 0?: ', quantidade = 5)
console.log("Quantidade menor ou igual ao estoque? :", estoque = 4)