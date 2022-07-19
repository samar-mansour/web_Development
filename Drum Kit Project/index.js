
function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    //sleep for 1 sec
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length

/* Working with anonymous function*/
for(var i=0; i< numberOfDrumButtons; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //play diffrenet sounds
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keyboard Press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



//how the evenListner works


/* adding Event listner and calling the function
   we didn't add the () to the function 
   becouse we don't want to apply it when we add event listner!
document.querySelector("button").addEventListener("click", handelClick)
*/

/* Regular Fuction 
function handelClick(){
    alert("I got clicked")
}
*/


