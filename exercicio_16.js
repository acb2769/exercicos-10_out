/*
16. Validação de E-mail: O e-mail é válido se incluir um @ e um ., e não começar com @ ou ..

email = 'exemplo@email.com'

Resultado esperado: true ou false??
*/


let email = "exemplo@email.com";
let caracterVerificar1 = '@';
let caracterVerificar2 = '.';
caracter1 = 0
caracter2 = 0 
validar = true;
validar1 = true;
validar2 = true;

for (let i = 0; i < email.length; i++) {

    if (email[i] === caracterVerificar1) {
        caracter1 = 1;
        console.log(`O caractere '@' foi encontrado na posição ${i}.`);
        validar1 = true;
        if (i === 0){
            validar1 = false;}     
    }
    
    if (email[i] === caracterVerificar2) {
        caracter2 = 1;
        console.log(`O caractere '.' foi encontrado na posição ${i}.`);
        validar2 = true;
        if (i === 0){
            validar2 = false;}   
    }    
  } 
  if (validar1 === false || validar2 === false || caracter1 === 0 || caracter2 === 0){
        console.log('email Invalido');
        validar = false;}
    else {
      console.log('email Valido');
      validar = true;}

 console.log("resposta esperada: ", validar);
 console.log(" email: ", email);