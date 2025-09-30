var idade = 65;
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.');
} else if (idade < 18 || idade >= 65) /* Ou idade > 65 (||) */ {
        console.log('Você pode votar, mas não é obrigatório.')
    } else {
        console.log('Você é obrigado a votar.')
    }
