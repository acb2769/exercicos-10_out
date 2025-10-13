/*
24. Cálculo de Bônus: O funcionário recebe bônus se ele atingiu a meta de vendas E 
trabalhou na empresa por mais de 2 anos.

atingiuMeta = true, anosNaEmpresa = 3

Resultado esperado: true ou false?
*/

let atingiuMeta = true
let anosNaEmpresa = 3

let validarbonus = true ? atingiuMeta == true && anosNaEmpresa > 2 : validarbonus = false 
 
console.log('Resposta esperada: ', validarbonus)
console.log('Atingiu meta de vendas?', atingiuMeta)
console.log('Anos trabalhados > 2?', anosNaEmpresa)