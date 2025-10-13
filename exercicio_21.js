/*
21.	Cálculo de Frete: Se o valor da compra for maior ou igual a R$ 50,00, 
o frete é grátis (R$ 0,00). Caso contrário, o frete é R$ 15,00. 
Qual o valor do frete para uma compra de R$ 49,99?
Resultado esperado: o valor numérico.
*/

let ValorCompra = 49.99;
let ValorTotalCompra = 0;
const frete = 15;  
 
if (ValorCompra >= 50){
    ValorTotalCompra = ValorCompra
    console.log('Frete Grátis!! Valor Total da Compra: ', ValorTotalCompra);
}
    else {
    ValorTotalCompra = ValorCompra + frete;  
    console.log('Valor do Frete é R$ 15,00. Valor total da Compra: ', ValorTotalCompra.toFixed(2))}