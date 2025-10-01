function tabuada() {
    let num = document.querySelector('#numero');
    let tab = document.querySelector('#tabuada');

    if (num.value.length == 0) {
        window.alert('Insira um valor!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${c*n}`;
            tab.appendChild(item);
            c++;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#gerar-tab").addEventListener("click", tabuada);
});