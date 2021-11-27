let cards = [

    {
        "face" : "deck/hearts_ace.png",
        "value": 1
    },
    {
        "face" : "deck/hearts_2.png",
        "value": 2
    },
    {
        "face" : "deck/hearts_3.png",
        "value": 3
    },
    {
        "face" : "deck/hearts_4.png",
        "value": 4
    },
    {
        "face" : "deck/hearts_5.png",
        "value": 5
    },
    {
        "face" : "deck/hearts_6.png",
        "value": 6
    },
    {
        "face" : "deck/hearts_7.png",
        "value": 7
    },
    {
        "face" : "deck/hearts_8.png",
        "value": 8
    },
    {
        "face" : "deck/hearts_9.png",
        "value": 9
    },
    {
        "face" : "deck/hearts_10.png",
        "value": 10
    },
    {
        "face" : "deck/hearts_jack.png",
        "value": 10
    },
    {  
        "face" : "deck/hearts_queen.png",
        "value": 10
    },
    {
        "face" : "deck/hearts_king.png",
        "value": 10
    },

    {
        "face" : "deck/diamonds_ace.png",
        "value": 1
    },
    {
        "face" : "deck/diamonds_2.png",
        "value": 2
    },
    {
        "face" : "deck/diamonds_3.png",
        "value": 3
    },
    {
        "face" : "deck/diamonds_4.png",
        "value": 4
    },
    {
        "face" : "deck/diamonds_5.png",
        "value": 5
    },
    {
        "face" : "deck/diamonds_6.png",
        "value": 6
    },
    {
        "face" : "deck/diamonds_7.png",
        "value": 7
    },
    {
        "face" : "deck/diamonds_8.png",
        "value": 8
    },
    {
        "face" : "deck/diamonds_9.png",
        "value": 9
    },
    {
        "face" : "deck/diamonds_10.png",
        "value": 10
    },
    {
        "face" : "deck/diamonds_jack.png",
        "value": 10
    },
    {
        "face" : "deck/diamonds_queen.png",
        "value": 10
    },
    { 
        "face" : "deck/diamonds_king.png",
        "value":10
    },
    {
        "face" : "deck/clubs_ace.png",
        "value": 1
    },
    {
        "face" : "deck/clubs_2.png",
        "value": 2
    },
    {
        "face" : "deck/clubs_3.png",
        "value": 3
    },
    {
        "face" : "deck/clubs_4.png",
        "value": 4
    },
    {
        "face" : "deck/clubs_5.png",
        "value": 5
    },
    {
        "face" : "deck/clubs_6.png",
        "value": 6
    },
    {
        "face" : "deck/clubs_7.png",
        "value": 7
    },
    {
        "face" : "deck/clubs_8.png",
        "value": 8
    },
    {
        "face" : "deck/clubs_9.png",
        "value": 9
    },
    {
        "face" : "deck/clubs_10.png",
        "value": 10
    },
    {
        "face" : "deck/clubs_jack.png",
        "value": 10
    },
    {
        "face" : "deck/clubs_queen.png",
        "value": 10
    },
    {
        "face" : "deck/clubs_king.png",
        "value": 10
    },
    {
        "face" : "deck/spades_ace.png",
        "value": 1
    },
    {
        "face" : "deck/spades_2.png",
        "value":2
    },
    {
        "face" : "deck/spades_3.png",
        "value": 3
    },
    {
        "face" : "deck/spades_4.png",
        "value": 4
    },
    {
        "face" : "deck/spades_5.png",
        "value": 5
    },
    {
        "face" : "deck/spades_6.png",
        "value": 6
    },
    {
        "face" : "deck/spades_7.png",
        "value": 7
    },
    {
        "face" : "deck/spades_8.png",
        "value": 8
    },
    {
        "face" : "deck/spades_9.png",
        "value": 9
    },
    {
        "face" : "deck/spades_10.png",
        "value": 10
    },
    {
        "face" : "deck/spades_jack.png",
        "value": 10
    },
    {
        "face" : "deck/spades_queen.png",
        "value": 10
    },
    {

        "face" : "deck/spades_king.png",
        "value": 10}

];

let clicks = 0;
let value = 0;
let board = document.getElementById("board");
let buttons = document.getElementById("ui");

function create(){

    for(var i = 0; i < cards.length; i++){

        var card = document.createElement("img");

        card.setAttribute("class","card");
        card.setAttribute("src", cards[i].face);
        cards[i].face=card.outerHTML;

    }

    shuffle()

    let dealBtn = document.createElement("input");

    dealBtn.setAttribute("type", "button");
    dealBtn.setAttribute("onClick", "deal()");
    dealBtn.setAttribute("value", "DEAL");
    dealBtn.setAttribute("class","btn");
    buttons.appendChild(dealBtn);

    let startOver_btn = document.createElement("input");

    startOver_btn.setAttribute("class","btn");
    startOver_btn.setAttribute("type", "button");
    startOver_btn.setAttribute("onClick", "startOver()");
    startOver_btn.setAttribute("value", "START OVER");
    startOver_btn.style.visibility="hidden";
    buttons.appendChild(startOver_btn);

}

function shuffle(){

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
        board.innerHTML += cards[i].face;
    }

}

function deal(){

    clicks = clicks+1;

    let startOver_btn = document.querySelector(".btn:nth-child(2)");

    if(clicks == 1){

        console.log(screen.width, window.innerWidth);
        board.childNodes[49].style.marginLeft="10vw";
        board.childNodes[50].style.marginLeft="5vw";
        board.childNodes[50].style.zIndex="-1";
        board.childNodes[49].style.top="3vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[49].style.top="5vw";   
        }
        
        board.childNodes[49].style.boxShadow="-1px -1px 2px #000";

        if(cards[1].value === 1 && cards[2].value <= 10|| cards[2].value === 1 && cards[1].value <= 10 ){

            value = value + cards[1].value + cards[2].value + 10

        }else if(cards[1].value === 1 && cards[2].value === 1){

            value = value + cards[1].value + cards[2].value + 10

        }else{

            value = value + cards[1].value + cards[2].value

        }

        startOver_btn.style.visibility="visible";

        console.log(value)

    }else if(clicks == 2 && value < 21){

        board.childNodes[48].style.marginLeft="15vw";
        board.childNodes[48].style.zIndex="2";
        board.childNodes[48].style.top="5vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[48].style.top="7vw";   
        }
        
        board.childNodes[48].style.boxShadow="-1px -1px 2px #000";


        if(cards[1].value === 1 || cards[2].value === 1 && cards[3].value != 1 &&  (value + cards[3].value) >= 21){

            value = value + cards[3].value - 10

        }else if(cards[3].value === 1 && value < 11){

            value = value + cards[3].value + 10

        }else{

            value = value + cards[3].value

        }

        console.log(value)

    }else if(clicks == 3 && value < 21){

        board.childNodes[47].style.marginLeft="20vw";
        board.childNodes[47].style.zIndex="3";
        board.childNodes[47].style.top="7vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[47].style.top="9vw";   
        }
        
        board.childNodes[47].style.boxShadow="-1px -1px 2px #000";

        if(cards[4].value === 1 && value < 11){

            value = value + cards[4].value + 10

        }else{

            value = value + cards[4].value

        }

        console.log(value)

    }else if(clicks == 4 && value < 21){

        board.childNodes[46].style.marginLeft="25vw";
        board.childNodes[46].style.zIndex="4";
        board.childNodes[46].style.top="9vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[46].style.top="11vw";   
        }
        
        board.childNodes[46].style.boxShadow="-1px -1px 2px #000";

 
        if(cards[5].value === 1 && value < 11){

            value = value + cards[5].value + 10

       }else{

            value = value + cards[5].value

        }

        console.log(value)

    }else if(clicks == 5 && value < 21){

        board.childNodes[45].style.marginLeft="30vw";
        board.childNodes[45].style.zIndex="4";
        board.childNodes[45].style.top="11vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[45].style.top="13vw";   
        }
        
        board.childNodes[45].style.boxShadow="-1px -1px 2px #000";

        if(cards[6].value === 1 && value < 11){

            value = value + cards[6].value + 10

        }else{

            value = value + cards[6].value

        }

        console.log(value)

    }else if(clicks == 6 && value < 21){

        board.childNodes[44].style.marginLeft="35vw";
        board.childNodes[44].style.zIndex="4";
        board.childNodes[44].style.top="13vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[44].style.top="15vw";   
        }
        
        board.childNodes[44].style.boxShadow="-1px -1px 2px #000";

        if(cards[7].value === 1 && value < 11){

            value = value + cards[7].value + 10

        }else{

            value = value + cards[7].value

        }

        console.log(value)

    }else if(clicks == 7 && value < 21){

        board.childNodes[43].style.marginLeft="40vw";
        board.childNodes[43].style.zIndex="4";
        board.childNodes[43].style.top="15vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[43].style.top="17vw";   
        }
        
        board.childNodes[43].style.boxShadow="-1px -1px 2px #000";

        if(cards[8].value === 1 && value < 11){

            value = value + cards[8].value + 10

        }else{

            value = value + cards[8].value

        }

        console.log(value)

    }else if(clicks == 8 && value < 21){

        board.childNodes[42].style.marginLeft="45vw";
        board.childNodes[42].style.zIndex="4";
        board.childNodes[42].style.top="17vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[42].style.top="19vw";   
        }
        
        board.childNodes[42].style.boxShadow="-1px -1px 2px #000";

        if(cards[9].value === 1 && value < 11){

            value = value + cards[9].value + 10

        }else{

            value = value + cards[9].value

        }

        console.log(value)

    }else if(clicks == 9 && value < 21){

        board.childNodes[41].style.marginLeft="50vw";
        board.childNodes[41].style.zIndex="4";
        board.childNodes[41].style.top="19vw";
        
        if(screen.width <= 700 || window.innerWidth <=700){
            board.childNodes[41].style.top="21vw";   
        }
        
        board.childNodes[41].style.boxShadow="-1px -1px 2px #000";

        if(cards[10].value === 1 && value < 11){

            value = value + cards[10].value + 10

        }else{

            value = value + cards[10].value

        }

        console.log(value)

    }

}

function startOver(){

    $("img[style]").removeAttr('style')

    value = 0;
    clicks = 0;

    board.innerHTML ="";
    shuffle()

    $(".btn:nth-child(2)").css("visibility","hidden");

}

