let input = document.getElementById("userInput");
let submitButton = document.getElementById("askButton");
let response = document.getElementById("answerDisplay");
let clear = document.getElementById("clearButton");

let error = "Invalid input.";

input.addEventListener("input", function(){
    



});

submitButton.addEventListener("click", function(){
    let inputBox = input.value.trim();
    let ballResponse = [
        "Yes.",
        "No.",
        "Maybe.",
        "Try again.",
        "Don't ask me bitch.",
        "I think you already know the answer"
    ];
    let randomResponse = Math.floor(Math.random() * ballResponse.length);

    if(inputBox == ""){
        response.innerHTML = error;
    } else{
        response.innerHTML = ballResponse[randomResponse];
        clear.style.display = "block";
    }

    response.style.fontSize = "30px";
    
    response.classList.add("fade-in");

    setTimeout(function(){
        response.classList.remove("fade-in");
    }, 1000);
})

clear.addEventListener("click", function(){
    input.value = "";
    response.innerHTML = "";
    clear.style.display = "none";
})
