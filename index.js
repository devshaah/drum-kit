//loop so that all boxes get the event listener
for(var i=0; i< document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
    // () would directly call function whereas without parentheses it waits for event
}

document.addEventListener("keydown", (KeyboardEvent)=>{
    //  console.log(KeyboardEvent);
    makesound(KeyboardEvent.key)
    buttonAnimation(KeyboardEvent.key)
})

function handleclick(){
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML)
}

function makesound(key){
    switch(key)
    {
        case "w": var tom1 = new Audio("sounds/tom-4.mp3");
                 tom1.play();
                break;
        case "a": var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s": var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d": var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j": var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "k": var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "l": var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

        default : console.log(this.innerHTML)
    }
}

const buttonAnimation = (key) => {
        const active = document.querySelector("."+key);
        active.classList.add("pressed");
        active.classList.remove("drum");
        setTimeout(() => {
             active.classList.remove("pressed");
             active.classList.add("drum");   
        }, 300);
}




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();