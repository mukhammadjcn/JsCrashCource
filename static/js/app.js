// Challange 1 : Get you age in days

function ageInDays(){
    var age = prompt("Tug'ilgan yilingizni kiriting :");
    var ageDays = (2021 - age)*365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode(`Tug'ilganingizga ${ageDays} kun bo'ldi`);
    h1.appendChild(textAnswer);
    h1.setAttribute("id", "ageInDays");
    document.getElementById("result").appendChild(h1);
}
function remove(){
    document.getElementById("ageInDays").remove()
}


// Challange 2 : Image generator
function catGenerate(){
    var image = document.createElement("img");
    var div = document.getElementById("cat-gen");
    image.src = "./static/images/5.svg";
    image.setAttribute("class", "col-2")
    image.setAttribute("id", "removeCat")
    div.appendChild(image)
}
function removeCat(){
    document.getElementById("removeCat").remove()
}


// To do list
function toDoList(){

    // get information from input
    var toDo = document.getElementById("toDo").value;
    document.getElementById("toDo").value = "";
    if(toDo.length > 5){
    var toDoValue = document.createTextNode(toDo)
    } else{
        alert(`Iltimos 5 ta so'zdan ko'proq bo'lgan vazifa kiritng`)
    }


    //create h2 element and add class
    var toDoItem = document.createElement("h2");
    toDoItem.appendChild(toDoValue);
    toDoItem.setAttribute("class", "list-item");

    //create btn and add class
    var cancelBtn = document.createElement("button");
    cancelBtn.innerText='X';
    cancelBtn.classList.add("btn", "btn-danger", "toDoBtn");

    // add button to h2 
    toDoItem.appendChild(cancelBtn)
    document.getElementById("list").appendChild(toDoItem) ;

    //cancel-btn function
    cancelBtn.addEventListener('click',function(){
        document.querySelector(".list-item").remove()
    })
    
}


// Rock Paper Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToInt());
    console.log('Computer choice :', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    // alert(botchoice);

}

function randomToInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'qaychi'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'qaychi': 1, 'rock': 0.5, 'paper' : 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'qaychi' : 0},
        'qaychi' : {'paper': 1, 'qaychi': 0.5, 'rock' : 0}
    };

    var yourChoice = rpsDatabase[yourChoice][computerChoice];
    var computerChoice = rpsDatabase[computerChoice][yourChoice];

    return [yourChoice, computerChoice];
}



// Changing colors
var allButtons = document.getElementsByTagName('button');
 
var copyAllButtons = [];
for (let i=0; i< allButtons.length; i++){
    copyAllButtons.push(allButtons[i])
}

function btnColorChange(btnThins){
    if (btnThins.value === 'red'){
        buttonsRed()
    } else if (btnThins.value === 'green'){
        buttonGreen()
    } else if (btnThins.value === 'reset'){
        buttonColorReset()
    } else if (btnThins.value === 'random'){
        randomColor()
    }
}

function buttonsRed(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger')
    }
}
function buttonGreen(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[1].classList[1]);
        allButtons[i].classList.add('btn-success')
    }
}
function buttonColorReset(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}