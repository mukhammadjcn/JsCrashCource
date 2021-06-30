



//don don ziki

function donDonZiki(){
    var result = document.getElementById("donDonResult")
    var userChoice = document.getElementById("option").value
    var computerOption = ['Quduq', 'Qogoz', 'Qaychi']
    var randomOption = computerOption[Math.floor(Math.random()*computerOption.length)];
    if (userChoice == 'Quduq' && randomOption == 'Quduq'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Durang ]`
    } else if (userChoice == 'Quduq' && randomOption == 'Qogoz'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutqazdingiz ]`
    } else if (userChoice == 'Quduq' && randomOption == 'Qaychi'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutdingiz ]`
    } else if (userChoice == 'Qaychi' && randomOption == 'Quduq'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutqazdingiz ]`
    } else if (userChoice == 'Qaychi' && randomOption == 'Qogoz'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutdingiz ]`
    } else if (userChoice == 'Qaychi' && randomOption == 'Qaychi'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Durang ]`
    } else if (userChoice == 'Qogoz' && randomOption == 'Quduq'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutdingiz ]`
    } else if (userChoice == 'Qogoz' && randomOption == 'Qogoz'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Durang ]`
    } else if (userChoice == 'Qogoz' && randomOption == 'Qaychi'){
        result.innerHTML = `${userChoice} : ${randomOption} [ Yutqazdingiz ]`
    } else if(userChoice == 'Bomm') {
        result.innerHTML = `${userChoice} : ${randomOption} [ Siz doim yutasiz ]`
    }
}

// Challange 1 : Get you age in days

function ageInDays(){
    var natija = document.getElementById("result")
    var date = new Date();
    var yili =  Number(prompt("Iltimos tug'ilgan yilingizni kiritng:"))
    var oyi = Number(prompt("Tug'ilgan oyingizni tartib raqamini kiriting :"))
    var kuni = Number(prompt("Tug'ilgan kuningizni kiritng"))
    var kabisaSoni = 0;
        for (i = yili; i <= date.getFullYear() ; i ++){
            if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)){
                kabisaSoni ++;
            } else{}
        }
    if (oyi <= date.getMonth()+1){
         otibKetgan()
    } else{
         endiKeladi()
    }
     
    function otibKetgan(){
        var toliqKun = (date.getFullYear() - yili)*365;
        var hozirgiKun = 0
        if (date.getMonth()+1 == oyi){
            hozirgiKun = Math.abs(kuni - date.getDate()) + kabisaSoni + toliqKun
        } else if (date.getMonth()+1 - oyi == 1){
            hozirgiKun = date.getDate() + 31 - kuni + kabisaSoni + toliqKun
        } else {
            hozirgiKun = date.getDate() + 31 - kuni + (date.getMonth() - oyi)*31 + kabisaSoni + toliqKun
        }
        natija.innerHTML = `Tug'ilganingizga ${hozirgiKun} kun bo'libdi :)`
    }

    function endiKeladi(){
        var toliqKun = (date.getFullYear() - yili)*365;
        var hozirgiKun = 0
        if (date.getMonth()+1 == oyi){
            hozirgiKun = Math.abs(kuni - date.getDate()) + kabisaSoni + toliqKun
        } else if (oyi - date.getMonth()+1  == 1){
            hozirgiKun = kuni + 31 - date.getDate() + kabisaSoni + toliqKun
        } else {
            hozirgiKun = kabisaSoni + toliqKun - (kuni + 31 - date.getDate() + (oyi - date.getMonth())*31)
        }
        natija.innerHTML = `Tug'ilganingizga ${hozirgiKun} kun bo'libdi :)`
    }
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



function showTime(){
    var time = new Date();
    var text = document.getElementById("demo");
    var answer = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    text.innerHTML = answer
}

function printPage(){
    window.print()
}


function getHours(){
    var text = document.querySelector(".section-title-sek")
    var sek = prompt("Sekundlarni kiritng");
    var soat = Math.floor(sek/3600);
    var minute = Math.floor((sek - soat*3600)/60)
    var sekund = sek - soat*3600 - minute*60;
    text.innerHTML = `Siz kiritgan ${sek} sekund, ${soat} soat, ${minute} minut va ${sekund} sekund ga teng`;
}

//vazifa 1

var result = document.getElementById("vazifa-1-natija")
function vazifa1(){
    var input = document.getElementById("vazifaBirInput").value;
    if (input > 1){
        funksiyaBir()
    } else {
        alert(`Iltimos, manfiy son, so'zlar yoki birdan kichik son kiritmang !`)
    }

    function funksiyaBir(){
        var boluvchilariSoni = Math.floor(input / 3);
        for (let i=1; i < boluvchilariSoni; i++){
            if ((i*3)/3 && !((i*3)%5 == 0)){
                var Value = document.createTextNode(i*3 + ' / ')
            } else {  
            }
            result.appendChild(Value)
        }
    }
}

function reset(){
    window.location.reload()
}


//vazifa 2
function vazifa2(){
    var result = document.getElementById("vazifa-2-natija")
    var yigindi = 0
    var input = document.getElementById("vazifaIkkiInput").value;
    for (let i=1;i<input;i++){
        if (input%i == 0){
            yigindi= yigindi + i
        } else{}
    }
    if (input == yigindi){
        result.innerHTML = `Siz kiritgan ${input} soni mukammal son`
    } else{
        result.innerHTML = `Siz kiritgan ${input} soni mukammal son EMAS`
    }
   
}

//vazifa 3
function PowerA3(){
    var input = document.getElementById("vazifaUchInput").value
    var result = document.getElementById("vazifa-3-natija")
    var yechim = ((input)**3)
    result.innerHTML = yechim
}

//vazifa 4
function vazifa4(){
    var input = document.getElementById("vazifaTortInput").value
    var result = document.getElementById("vazifa-4-natija")
    if (input > 9 && input < 100){
        result.innerHTML = `Qumri ${input} soni o'nliklar xonasiga kiradi`
    } else if (input > 0 && input < 10){
        result.innerHTML = `Mittivoy ${input} soni birliklar xonasiga kiradi`
    } else if (input > 99 && input < 1000){
        result.innerHTML = `Qarol ${input} soni yuzliklar xonasiga kiradi`
    } else {
        result.innerHTML = `Trol bu ${input} soni senga sholpillab qoladi, Kotta bo'sen o'qisan !`
    }
}

//vazifa 4
function vazifa5(){
    var input = document.getElementById("vazifaBeshInput").value;
    var result = document.getElementById("vazifa-5-natija");
    var yechim = input.split("").reverse().join(""); 
    result.innerHTML = yechim;
}




