function contar() {
    let ini = document.querySelector('#ini');
    let fim = document.querySelector('#fim');
    let pas = document.querySelector('#pas');
    let res = document.querySelector('#res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Preencha os valores!');
        res.innerHTML = 'Impossível contar';
    } else {
        res.innerHTML = 'Contando... <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if (p <= 0) {
            window.alert("Passo inválido! Considerando paso '1'.");
            p = 1;
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} &#128073; `;
            }
        } else {
            // Contagem descrescente
            for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} &#128073; `;
            }
        }
        res.innerHTML += '&#127770;'
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#confirmar").addEventListener("click", contar);
});