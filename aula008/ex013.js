var dia = new Date().getDay();

console.log(dia)

switch(dia) {
    case 0: 
        console.log('Domingo')
    break
    case 1: 
        console.log('Segunda');
    break
    case 2: 
        console.log('Terça');
    break
    case 4: 
        console.log('Quarta');
    break
    case 5:
        console.log('Sexta');
    break
    case 6: 
        console.log('Sábado');
    break
    default:
        console.log('[Erro] Inválido.');
}