//Code for the text-cycling effect
function cycleText(i,j, verbs, textElement,reverse=1) {
    if (verbs.length > i) {
        setTimeout(function() { 
            textElement.innerHTML = "I am a"+ verbs[i].slice(0,j+reverse*(1)) + "_"; 
            /*
            Logic:
            Case #1: j is at word end-
                if the reverse flag is not there, then put the reverse flag
                if the reverse flag is there, loop with j-1 
                (for smoother animation)

            Case #2: j is at starting+1 [ it will be in starting next iteration ]-
                if the reverse flag is not there, then just loop with j+1
                if the reverse flag is there, start loop with i+1, 0

            Case #3: j in between -
                if reverse flag: j-1
                otherwise: j+1
            */

            if(j == verbs[i].length){
                if (reverse==1){
                    cycleText(i,j,verbs,textElement,-1);
                } else {cycleText(i,j-1,verbs,textElement,-1)}
            }
            else if(j == 1){
                if (reverse==1){
                    cycleText(i,j+1,verbs,textElement);
                } else {cycleText(i+1,0,verbs,textElement)}
            }
            else{
                if (reverse==1){
                    cycleText(i,j+1,verbs,textElement);
                } else {cycleText(i,j-1,verbs,textElement,-1)}                
            }

        }, 2700/verbs[i].length /* each word should take 2 secs to type out */); 
        
        

    } else if (verbs.length == i) {

        cycleText(0,0, verbs, textElement);
    }

}          

var verbs = [" developer"," student","n enthusiast"];
let textElement = document.getElementById("changingText");
setTimeout(function() {cycleText(0,verbs[0].length,verbs, textElement,-1);}, 3000);

// Code for the custom cursor to work
var cur = document.getElementById("cursor");
document.addEventListener("mousemove", function(event){
    cur.style.left=(event.clientX-15).toString() + "px";
    cur.style.top=(event.clientY-5).toString() + "px";
});

// Code for the custom cursor hover effect

var elements = document.getElementsByClassName("hoverEffect");

for(i=0;i<elements.length;i++){
    elements[i].onmouseover=function(){
        cur.style["boxShadow"] = "0px 0px 5px #00FFFF, 0px 0px 25px #00FFFF";
        cur.style["borderColor"] = "#00FFFF";
    }

    elements[i].onmouseout = function(){
        cur.style["boxShadow"] = "0px 0px 5px #99CCED, 0px 0px 25px #99cced";
        cur.style["borderColor"] = "#9c89ff";        
    }
}
