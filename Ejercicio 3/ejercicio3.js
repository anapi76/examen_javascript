//Función para animar el texto
let secretCode = ['EXAMEN', 'PRIMERA', 'EVALUACION'];
let codeElement = document.getElementsByTagName('h2')[0];
let possible = ['EXAMEN', 'PRIMERA', 'EVALUACION'];
let divBanner = document.getElementsByClassName('banner')[0];
let image = ['https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg', 'https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg', 'https://estaticos-cdn.prensaiberica.es/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg'];

const animatedName = (element, code, possible, image) => {
    let currentIndex = code.length;
    divBanner.style.transition = 'background-image 2s';
    divBanner.style.backgroundImage = `url(${image})`;
    const changeLetters = () => {

        if (currentIndex >= 0) {
            let changedText = '';
            for (let i = 0; i < code.length; i++) {
                if (i >= currentIndex) {
                    changedText += code[i];
                }
                else {
                    changedText += possible.charAt(Math.floor(Math.random() * possible.length));
                }
            }
            element.innerHTML = changedText;
            currentIndex--;

            if (currentIndex >= 0) {
                setTimeout(changeLetters, 100);
            }
        }
    };
    changeLetters();

};

animatedName(codeElement, secretCode[0], possible[0], image[0]);

setTimeout(() => {
    animatedName(codeElement, secretCode[1], possible[1], image[1]);
}, 1500);
setTimeout(() => {
    animatedName(codeElement, secretCode[2], possible[2], image[2]);
}, 4000);

setInterval(() => {
    animatedName(codeElement, secretCode[0], possible[0], image[0]);
    setTimeout(() => {
        animatedName(codeElement, secretCode[1], possible[1], image[1]);
    }, 2000);
    setTimeout(() => {
        animatedName(codeElement, secretCode[2], possible[2], image[2]);
    }, 5000);
}, 7000);

/* animatedName(codeElement, secretCode[0], possible[0], image[0]);
setTimeout(() => {
    animatedName(codeElement, secretCode[1], possible[1], image[1]);
}, 1000);
setTimeout(() => {
    animatedName(codeElement, secretCode[2], possible[2], image[2]);
}, 3000); */

//animatedName(codeElement, secretCode[1],possible[1]);
//animatedName(codeElement, secretCode[2],possible[2]);

/* const animatedName = (element, code) => {
    let currentIndex = code.length;
    secretCode = secretCode[0];
    console.log(secretCode);
    const changeLetters = () => {
        if (currentIndex >= 0) {
            let changedText = '';
            for (let i = 0; i < code.length; i++) {
                if (i >= currentIndex) {
                    changedText += code[i];
                }
                else {
                    //changedText +=String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    changedText += possible[0].charAt(Math.floor(Math.random() * possible[0].length));
                }
                //changedText += i >= currentIndex ? code[i] : String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
            element.innerHTML = changedText;
            currentIndex--;

            if (currentIndex >= 0) {
                setTimeout(changeLetters, 100);
            }
        }
    };
    changeLetters();

};

animatedName(codeElement, secretCode[0]); */

/* DESCIFRAR CÓDIGO EMPEZANDO POR LA PRIMERA LETRA
const animatedName = (element, code) => {
    let currentIndex = 0;

    const changeLetters = () => {
        if (currentIndex <= code.length) {
            let changedText = '';
            for (let i = 0; i < code.length; i++) {
                changedText += i < currentIndex ? code[i] : String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Cambiar a un carácter aleatorio si no se ha revelado
            }
            element.innerHTML = changedText;
            currentIndex++;
            if (currentIndex <= code.length) {
                setTimeout(changeLetters, 50); // Cambiar la velocidad según sea necesario
            }
        }
    };

    changeLetters();
}; */