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


