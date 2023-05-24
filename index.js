//finding elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card_body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText =cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit", function(event){
    event.preventDefault();
    checkResult(guessingNumber.value);
});

function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
     if(guessingNumber == randomNumber){
        resultText.innerHTML = 'You have won';
     }else{
        resultText.innerHTML = `You have lost. random number was: ${randomNumber}`;
     }

}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}
