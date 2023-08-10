const FRONT = "card_front"
const BACK = "card_back"
const ICON = "icon"

startGame();

function startGame() {
    cards = game.createCardsFromTechs(game.techs);
    shuffleCards(cards);

    initializeCards(cards);

}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach(card=> {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card');
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);


    })

}


function createCardContent(card, cardElement){
    createCardFace(FRONT,card,cardElement);
    createCardFace(BACK,card, cardElement);

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face == FRONT){
        
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement)
        
    }else{
        cardElementFace.innerHTML =  "G";
    }
    element.appendChild(cardElementFace);
}


function shuffleCards(cards){
let currentIndex = cards.lenght;
let randomIndex = 0;

while( currentIndex !==0 ){

    randomIndex = Math.floor(Math.random * currentIndex);
    currentIndex--;

    [cards[randomIndex],cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]

}

}

function flipCard(){

    this.classList.add("flipp")
}
