const cardArray = [
    {
        name : "I",
    },
    {
        name:"can",
    },
    {
        name:"me",
    },
    {
        name:"my",
    },
    {
        name:"for",
    },
    {
        name:"we",
    },
    {
        name : "I",
    },
    {
        name:"can",
    },
    {
        name:"me",
    },
    {
        name:"my",
    },
    {
        name:"for",
    },
    {
        name:"we",
    }
    
    
]
cardArray.sort(()=> 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const result = document.getElementById("result");
let count = 1;
let cardChosen = [];
let cardChosenId = [];

//creating board
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const  card = document.createElement("div");
        card.setAttribute("data-id", i);
        card.setAttribute("class","card");
        card.innerHTML =cardArray[i].name;
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch(){ 
    const cards = document.querySelectorAll("#grid div");
    const firstCardChosenId = cardChosenId[0];
    const secondCardChosenId = cardChosenId[1];
    const firstCardChosen = cards[firstCardChosenId];
    const secondCardChosen = cards[secondCardChosenId];
    
    if(cardChosen[0] == cardChosen[1]){
        firstCardChosen.innerHTML =  "😄";
        secondCardChosen.innerHTML = "😄";
        firstCardChosen.removeEventListener("click", flipCard);
        secondCardChosen.removeEventListener("click", flipCard);
        result.innerHTML = count++;
    }
    else{
        firstCardChosen.classList.remove("card-flipped");
        secondCardChosen.classList.remove("card-flipped");
    }
    cardChosen = [];
    cardChosenId=[];
    if(count == (cardArray.length/2)+1){
        result.innerHTML = "Congratulations, You found them all";
    }
    
}
function flipCard(){
const cardId = this.getAttribute("data-id");
const cardName = cardArray[cardId].name;
cardChosen.push(cardName);
cardChosenId.push(cardId);
console.log(cardChosenId);
this.classList.add("card-flipped");
if(cardChosen.length === 2){
    setTimeout(checkMatch, 600);
}
}

