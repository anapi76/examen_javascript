let divPhoto = document.getElementsByClassName('photo');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDiv = Array.from(divPhoto);

const insertPhotos = () => {
    let arrayRandom = randomPhotos();
    arrayDiv.map((element, index) => {
        element.style.backgroundImage = `url(images/${arrayRandom[index]}.jpg)`;
        element.addEventListener('click',stopInterval);
    })
}

const randomPhotos = () => {
    return array.sort(() => Math.random() - 0.5);
}

const stopInterval=()=>{
    clearInterval(interval);
}

let interval = setInterval(insertPhotos, 2000);


