let i;
let form = document.getElementsByTagName('form')[0];
let inputName = document.getElementsByName('name')[0];
let modal = document.getElementsByClassName('modal')[0];
let closeButton = document.getElementsByClassName('close-button')[0];
let h4 = document.getElementsByTagName('h4')[0];
let nameEpisode = document.getElementsByClassName('tag')[0];

//Hago la petición http por página
const getData = async (i) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${i}`);
        const data = response.data;
        let loaded=true;
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

const getDataChar = async (url) => {
    try {
        const response = await axios.get(`${url}`);
        const data = response.data.name;
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

const getEpisodes = async () => {
    if(!loaded){
        alert('Los personajes aún no han sido cargados. Por favor, espera.');
    }
    let episode;
    for (i = 1; i <= 51; i++) {
        episode = await getData(i);
        let name = episode.name;
        let number = episode.episode;
        let characters = episode.characters;
        let object = { number: number, characters: characters };
        window.localStorage.setItem(name, JSON.stringify(object));
    };
    //console.log(episodes);
}

const getName=async(url)=>{
    let name = await getDataChar(url);
    console.log(name);
    return name;
    
}

const showInfo = (event) => {
    event.preventDefault();
    let key = inputName.value;
    let data = window.localStorage.getItem(key);
    let episode = JSON.parse(data);
    return modalContent(key, episode);
}

const createP = () => {
    let title = document.createElement('p');
    h4.appendChild(title);
}

const modalContent = (key, episode) => {
    nameEpisode.textContent = key;
    let characters = episode.characters;
    characters.map(async(element,index) => {
        createP();
        let name=getName(element);
        let p=document.getElementsByTagName('p');
        p[index].textContent=await name;
    })
    console.log(characters.length);
    return showModal();
}

// función que esconde la pantalla modal
const closeModal = () => {
    modal.className = 'modal';
}

// función que muestra la pantalla modal
const showModal = () => {
    modal.className = 'modal show-modal';
}

getEpisodes();
document.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);
form.addEventListener("submit", (event) => showInfo(event));