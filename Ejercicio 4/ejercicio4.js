let card=document.getElementsByClassName('photo');
let img=document.getElementsByTagName('img')[0];
let script=document.getElementsByTagName('script')[0];
let title=document.getElementsByClassName('caption');

const getData = async (i) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/films/${i}/`);
        const data = response.data;
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

const createCards = () => {
    let cont = 0;
    console.log(card);
    while (cont <= 5) {
        let divCard = card[cont].cloneNode(true);
        divCard.style.display='none';
        script.insertAdjacentElement('beforebegin',divCard);
        cont++;
    }
}

const showCards=async()=>{

    for(let i=1;i<7;i++){
        let films= await getData(i);
        card[i].style.display='block';
        title[i].textContent=films.title;
        let p=document.createElement('p');
        p.textContent=films.opening_crawl;
        card[i].appendChild(p);
    }

}

createCards();
img.addEventListener('click',showCards);
