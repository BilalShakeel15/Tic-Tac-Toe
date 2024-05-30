let boxes= document.querySelectorAll(".box");
let resets=document.querySelectorAll(".reset");
let h=document.querySelector(".hide");
let msg=document.querySelector("h2");
let audio=document.querySelector("#myAudio");
console.log(boxes);
let turn=true;
let count=0;
let a=prompt("Enter your name of Player 1:");
let b=prompt("Enter your name of Player 2:");

let winPatterns=[[0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];

const enable=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#ffffc7";
    }
    turn=true;
    h.classList.add("hide");
    count=0;
    a=prompt("Enter your name of Player 1:");
    b=prompt("Enter your name of Player 2:");
}
resets.forEach((reset)=>{
    reset.addEventListener("click",()=>{
        enable();
    });
});
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==true)
        {
            audio.play();
            box.style.color="red";
            box.innerText=a[0];
            turn=false;
            
        }
        else{
            audio.play()
            box.style.color="blue";
            box.innerText=b[0];
            turn=true;
        }
        box.disabled=true;
        count++;
        let check=checkWinner();
        if(count==9 && check!=true)
        {
            draw();
        }
    });
});
const draw=()=>{
    msg.innerText=`Match Drawn.Play again!`;
    h.classList.remove("hide");
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          boxes[pattern[0]].style.backgroundColor="grey";
          boxes[pattern[1]].style.backgroundColor="grey";
          boxes[pattern[2]].style.backgroundColor="grey";
          win(pos1Val);
          return true;
        }
      }
    }
    return false;
  };
// const checkwinner=()=>{
//     if(boxes[3].innerText!="" && boxes[4].innerText!="" && boxes[5].innerText!="")
//     {
//         if(boxes[3].innerText!==boxes[4].innerText!=""==boxes[5].innerText!="")
//         {
//             let a=boxes[4].innerText;
//             win(a);
//         }
//     }
//     for(let p of pattern)
//     {
//         let p1=boxes[p[0]].innerText;
//         let p2=boxes[p[1]].innerText;
//         let p3=boxes[p[2]].innerText;

//         if(p1!="" && p2!="" && p3!="")
//         {
//                 if(p1===p2 && p2===p3)
//                 {
//                     win(p1);
//                     return true;
//                 }
//         }
//     }
// };
const win=(pw)=>
{
    msg.innerText=`Congratulations, Winner is ${pw}`;
    h.classList.remove("hide");
    for(let box of boxes)
    {
        box.disabled=true;
    }
}