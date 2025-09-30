var hora = new Date().getHours();
var ph = document.querySelector('p#ph');
var imgh = document.querySelector('div#imgh');
var main = document.querySelector('main');

ph.innerHTML = `Agora são ${hora}h!`;

if (hora < 6) {
    imgh.style.backgroundImage = "url('assets/madrugada.jpg')";
    main.style.backgroundColor = 'black';
} else if (hora < 12) {
    imgh.style.backgroundImage = "url('assets/manha.jpg')";
    main.style.backgroundColor = '#eec144';
} else if (hora < 18) {
    imgh.style.backgroundImage = "url('assets/tarde.jpg')";
    main.style.backgroundColor = '#ee7444ff';
} else if (hora <= 23) {
    imgh.style.backgroundImage = "url('assets/noite.jpg')";
    main.style.backgroundColor = '#413e3dff';
}

