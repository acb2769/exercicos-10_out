/*
30. Validação de Transação: Uma transação é segura se o valor for menor que R$ 1000,00 e 
a origem for um IP conhecido, 
OU se o usuário tiver autenticação de dois fatores habilitada.

valor = 1200, ipConhecido = false, autenticacaoDoisFatores = true

Resultado esperado: true ou false?

*/
let valor = 1200
let ipConhecido = false
let autenticacaoDoisFatores = true

let validarTransacao = true ? (valor < 1000 && ipConhecido === true) || autenticacaoDoisFatores === true : validarTransacao = false 
 
console.log('Transação é válida?: ', validarTransacao)
console.log('Valor < 1000 e origem do IP conhecido: ', valor, ipConhecido)
console.log("Usuario tem autentiacação de dois fatores? :", autenticacaoDoisFatores)


/*


//let telefone = '123456789'
//let contatoEmail = 'fasfdfsd@email.com'
let telefone = ''
let contatoEmail = ''
let telefonePreenchido = false
let contatoEmailPreenchido = false

if (contatoEmail === ''){
    contatoEmailPreenchido = false;
    validarCampo = true;
        if (telefone === '') {
            telefonePreenchido = false
            console.log('Telefone é obrigatorio ser preenchido');}
        else {
            telefonePreenchido = true;
            }
    }
else{
    contatoEmailPreenchido = true;
    validarCampo = false;
    }
    
console.log('Campo de telefone é obrigatorio?: ', validarCampo)
console.log('Campo telefone preenchido: ', telefonePreenchido)
console.log("CAmpo de email preenchido? :", contatoEmailPreenchido)
*/