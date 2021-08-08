const mobileMoney = document.getElementById('mobileMoney');
const sendMoney = document.getElementById('sendMoney');
const btnOne = document.getElementById('btn-back-one');
const btnTwo = document.getElementById('btn-back-two');


function portailTwoHandler(){
const showElement = document.querySelector('.box-two');
showElement.classList.add('hidden');

}

function portailThreeHandler(){
    const showElement = document.querySelector('.box-three');
    showElement.classList.add('hidden');
    
    }



function mobileMoneyHandler(){
const showElement = document.querySelector('.box-two');
showElement.classList.remove('hidden');

}

function sendMoneyHandler(){
    const showElement = document.querySelector('.box-three');
    showElement.classList.remove('hidden');
}
function airtime(){
    
}
function c(){
    
}

mobileMoney.addEventListener('click',mobileMoneyHandler);
sendMoney.addEventListener('click',sendMoneyHandler);

btnOne.addEventListener('click',portailTwoHandler);
btnTwo.addEventListener('click',portailThreeHandler);