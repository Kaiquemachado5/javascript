var listaEntrada = [];
var ulEntrada = document.querySelector('ul#lista-entrada');


function adicionar() {
    let inputEl = document.querySelector('input#numero-entrada');
    let input = inputEl.value;
    if (Number(input) < 1 || Number(input) > 100 || input.length == 0 || listaEntrada.indexOf(Number(input)) != -1) {
        alert('Preencha os campos com um valor válido e sem repetições.');
    } else {
        let numEntrada = Number(input);
        listaEntrada.push(numEntrada);
        let liEntrada = document.createElement("li");
        liEntrada.textContent = `Valor ${numEntrada} adicionado.`;
        ulEntrada.appendChild(liEntrada);
    }
    inputEl.value = "";
    inputEl.focus();
}


function analisar() {
    let analiseSaida = document.querySelector('div#paragrafo-saida');
    listaEntrada.sort();
    let numCadastrados = listaEntrada.length;
    let maiorNumero = listaEntrada.at(-1);
    let menorNumero = listaEntrada.at(0);
    let somaTotal = 0;
    for (val = 0; val < listaEntrada.length; val ++) {
        somaTotal += listaEntrada[val];
    };
    let media = somaTotal / listaEntrada.length;
    let mensagens = [
        `Ao todo temos ${numCadastrados} numeros cadastrados.`,
        `O maior numero da lista é ${maiorNumero}.`,
        `O menor numero da lista é ${menorNumero}.`,
        `A soma total dos número é ${somaTotal}.`,
        `A media é ${media}.`
    ];
    for (i = 0; i < mensagens.length; i++  ) {
        let pSaida = document.createElement('p'); 
        pSaida.textContent = mensagens[i];
        analiseSaida.appendChild(pSaida);          
    }
    analiseSaida.style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#adicionar-btn").addEventListener("click", adicionar);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#finalizar-btn").addEventListener("click", analisar);
});