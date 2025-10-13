/*
29. Validação de Campo Obrigatório: O campo telefone é obrigatório se o campo contatoEmail estiver vazio.

telefonePreenchido = false, contatoEmailPreenchido = false

Resultado esperado: true ou false?
*/

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