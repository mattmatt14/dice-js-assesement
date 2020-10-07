let rollButton = document.querySelector("#roll");
let numberInput = document.querySelector("#userchoice");
let shownumButton = document.querySelector("#showrolls");
let resultContainer = document.querySelector("#result-container");
let totall = document.querySelector("#total")
let dieRolls = [];

function rollRandomnum() {
    return Math.floor(Math.random() * 6) + 1;

}

rollButton.addEventListener("click", function() {
    let numberIn = Number(numberInput.value);
    let count = 0;
    dieRolls = []

    while (count < numberIn) {

    dieRolls.push(rollRandomnum())                         
    totall.innerHTML = (numberInput.value) + dieRolls[count];

    count++;
    console.log(totall.innerHTML)
    }
})

// function sumNumbers() {

//     totall.innerHTML = Number(numberInput) * 2;
//       console.log()
// }

shownumButton.addEventListener("click", function() {
    let count = 0;
    resultContainer
    
    while (count < dieRolls.length) {
        resultContainer.innerHTML += '<li>' + (count + 1) + ' : ' + dieRolls[count] + '</li>'
       count++;
        // console.log(dieRolls[count]);
    }      

})


