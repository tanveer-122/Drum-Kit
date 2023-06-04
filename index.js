document.addEventListener("keypress",function(e){
  playSound(e.key);
  animation(e.key);
})

var length=document.querySelectorAll(".drum").length;
for(var i=0; i<length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var choice=this.innerHTML;
    playSound(choice);
    animation(choice);
} );
}

function playSound(key1){
  switch(key1){
      case "w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case "s":
        var audio=new Audio("sounds/snare.mp3")
        audio.play();
        break;

      case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "j":
        var audio=new Audio("sounds/tom-2.mp3")
        audio.play();
        break;

      case "k":
        var audio=new Audio("sounds/tom-3.mp3")
        audio.play();
        break;

      case "l":
        var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        break;

      case "default":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      }
}

function animation(key){
    var currentButton=document.querySelector("."+key);
    currentButton.classList.add("pressed");
    setTimeout(function(){
      currentButton.classList.remove("pressed");
    },100);
}
