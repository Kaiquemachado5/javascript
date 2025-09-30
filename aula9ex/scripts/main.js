

function verificar() {
    var date = new Date();
    var anoAtual = date.getFullYear();
    var anoNascimento = document.querySelector('input#anoNascimento');
    var res = document.querySelector('div#res p');
    var resImg = document.querySelector('div#res-img');

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {
        window.alert('Por favor, preencha todos os campos!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = anoAtual - Number(anoNascimento.value);
        
        if (sexo[0].checked) {
            sexo = 'Masculino';
                if (idade >= 0 && idade < 10){
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/menino.jpg')";
                    resImg.style.backgroundPosition = "rigth center";
                } else if (idade < 21) {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/jovem-rapaz.jpg')";
                    resImg.style.backgroundPosition = "center center";
                } else if (idade < 50) {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/homem.jpg')";
                    resImg.style.backgroundPosition = "left center";
                } else {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/idoso.jpg')";
                    resImg.style.backgroundPosition = "center center";
                }
        } else {
            sexo = 'Feminino';
                if (idade >= 0 && idade < 10){
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/menina.jpg')";
                    resImg.style.backgroundPosition = "center center";
                } else if (idade < 21) {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/jovem-menina.jpg')";
                    resImg.style.backgroundPosition = "center center";
                } else if (idade < 50) {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/mulher.jpg')";
                    resImg.style.backgroundPosition = "center center";
                } else {
                    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
                    resImg.style.backgroundImage = "url('assets/idosa.jpg')";
                    resImg.style.backgroundPosition = "rigth center";
                }
        }

        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    };
    
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#verificar").addEventListener("click", verificar);
});