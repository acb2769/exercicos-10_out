/*
18.	Acesso a Conteúdo: O usuário pode ver o conteúdo premium se ele tiver uma assinatura ativa 
OU for um membro de teste gratuito.
assinaturaAtiva = false, membroTesteGratuito = false
Resultado esperado: true ou false


*/

let assinaturaAtiva = false; 
let membroTesteGratuito = false; 

let validar = true ? (assinaturaAtiva == true || membroTesteGratuito == true) : validar = false

console.log("Usuário tem acesso a Página?", validar);
console.log("Assinatura Ativa?", assinaturaAtiva);
console.log("Membro Teste Gratuito?", membroTesteGratuito);

