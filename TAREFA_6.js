console.log("comum-1\ngerente-2\ndiretor-3");
var permissao = 2

switch (permissao) {
    case 1:
        console.log("Você possui permissão comum.");
        break;
    case 2:
        console.log("Você possui permissão de gerente.");
        break;
    case 3:
        console.log("Você possui permissão de diretor.");
        break;
    default:
        console.log("Tipo de permissão desconhecido.");
}