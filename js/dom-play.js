// alert("It's working!");

// let actors = document.querySelectorAll(".hamlet");
 
// console.log(actors);

// = is assignment == is comparison 

function myAlert(){
    alert("I'm clicked");
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

// first for loop to set the event handler on the spans
for(const mySpan of spans){
    mySpan.addEventListener("click",function (ev){
        highlightActor(mySpan.dataset.actor);
    });
    // alert(mySpan.dataset.actor);
}

// second for loop to distinguish the actors from each other 
function highlightActor(actor){

    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){// current actor, highlight
            mySpan.style.backgroundColor='yellow';
        }else{// not current actor, remove highlight
            mySpan.style.backgroundColor="white";
        }
    }








    // alert("The current actor is: " + actor);
}

function highlight(el){

    if(el.style.backgroundColor == "yellow"){
        el.style.backgroundColor="white";
    }else{
        el.style.backgroundColor='yellow';
    }
}


