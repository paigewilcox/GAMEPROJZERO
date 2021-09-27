///////////////////SO MUCH MORE EASIER/////////////////////////////////////////////////////////////////


//making the button click
document.addEventListener('click', function(event) {
    console.log(event.target)
    if (!event.target.matches('.dieroll') && !event.target.matches('#diepic')) return;     //if this event target DOE NOT match the die roll we return,stopping the function.
    event.preventDefault();
    rollDice();
});

//allowing for the number to appear on the screen, then be removed from the screen
function showResult(result) {    //result is a filler word
    document.getElementById('dieResult').innerHTML = result;
};



// keep track of total legal spaces
const totalSpaces = 20;
// keep track of current position on game board
let diceTotal = 0;

// create kermit's spaces
for(let i=0; i < totalSpaces; i++){
    let finishdiv = $('#finish'); // let finishdiv = document.getElementById('finish');
    finishdiv.append(`<div id="index${i}" class ="elem"></div>`);
};

// kermit starts here (put image in first box)
document.getElementById('index0').style.backgroundImage =
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYADL2Jsbm6Hi_rzFf-4J8wTxT-o1gRtLjcw&usqp=CAU)";

// function to roll dice
function rollDice() {
    // get a legal dice roll value
    let diceNumber = Math.floor((Math.random() * 6 ) + 1);

    // add the dice roll value to current position on board
    diceTotal = diceTotal + diceNumber;

    // if past the last square on board, make sure you don't go past it
    if (diceTotal > totalSpaces) {  //always wanting to represent repeated values as variable bc les work & less chance of fuck ups
        diceTotal = totalSpaces - 1;
    }

    // show yo tail feathers
    showResult(diceTotal);

    // put kermit in the right square, and remove his ass from the wrong ones
    for (let i=0; i< totalSpaces; i++) {
        if (i == diceTotal) {
            document.querySelector(`#index${i}`).style.backgroundImage =
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYADL2Jsbm6Hi_rzFf-4J8wTxT-o1gRtLjcw&usqp=CAU)";
        }
        else {
            document.querySelector(`#index${i}`).style.backgroundImage = "unset";
        }
    }
};






////////////////////////////////////WHAT I TRIED TO DO////////////////////////////////////////////









//creating two variables for the bunny and turtle 
//give it what value?
// create an array that is connected to these variables

// const bunny

// const turtle

//creating an array for my game board thats 
//SYNTAX FOR ARRAYS JS
//false instead of null

//put the variable within the function

// let hareArray = ["hare", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

// let turtleArray = Array(21).fill(false); // [false, false, false, false, false]

// //["",  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

//         turtleArray.forEach((element, index) => {
//             let $finishdiv = $('#finish')
//         $finishdiv.append(`<div id="index${index}" class ="elem"></div>`)
//     });



// document.addEventListener('click', function(event) {
//     console.log(event.target)
//     if (!event.target.matches('.move')) 
//     return;
//     event.preventDefault();
//     loadPic();
// });

// function loadPic() {
//     turtleArray[diceTotal] = document.getElementsByClassName("imturtle").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYADL2Jsbm6Hi_rzFf-4J8wTxT-o1gRtLjcw&usqp=CAU";
// }

// roll dice function incorporating event listener and show result
// let diceTotal = 0;
// function rollDice() {
//     let diceNumber = Math.floor((Math.random() * 6 ) + 1);
//     diceTotal = diceTotal + diceNumber;
//     console.log(diceTotal);
//     $('#dieResult').remove();
//     showResult(diceNumber);     //since we are calling the fxn
//     turtleArray[diceTotal] = true//document.getElementsByClassName("imturtle");
//     for (let i = turtleArray.length - 1; i > 0; i--) {
//         if (turtleArray[i]) {
//             document.querySelector(`#index${i}`).style.backgroundImage =
//                 "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYADL2Jsbm6Hi_rzFf-4J8wTxT-o1gRtLjcw&usqp=CAU)";
//         }

//     }
// };
