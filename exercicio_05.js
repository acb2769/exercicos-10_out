/*
5 - Permissão de Administrador: O usuário pode excluir um item 
se ele for um administrador ou o proprietário do item.
isAdministrador = false, isProprietario = false

Resultado esperado: true ou false?
*/

let Administrador = false
let Proprietario = false
//let validar = true ? Administrador == true || Proprietario == true : validar = false

if (Administrador == true || Proprietario ==  true){
    (validar = true)
    console.log('Pode excluir item')}
else{
    (validar = false)
    console.log('NÃO pode excluir item')}

console.log("Resultado esperado: ", validar);
console.log("Administrador?: ", Administrador);
console.log(" Proprietario?: ", Proprietario);
