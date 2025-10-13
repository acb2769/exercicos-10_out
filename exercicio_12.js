/*
12 - Cálculo de Desconto: Se o valor da compra for maior ou igual a R$ 200,00, 
o desconto é de 10%. 
Qual o valor final para uma compra de R$ 250,00?
Resultado esperado: o valor numérico.

*/

let ValorCompra = 250; 
 
if (ValorCompra >= 200){
    (ValorCompra = ValorCompra * 0.90)
    console.log('Novo Valor da Compra é: ',ValorCompra) 
}
    else
{console.log('Não tem desconto, valor da compra é: ',ValorCompra)}