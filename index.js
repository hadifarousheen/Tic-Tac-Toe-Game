const box1=document.querySelector('.box1');
const box2=document.querySelector('.box2');
const box3=document.querySelector('.box3');
const box4=document.querySelector('.box4');
const box5=document.querySelector('.box5');
const box6=document.querySelector('.box6');
const box7=document.querySelector('.box7');
const box8=document.querySelector('.box8');
const box9=document.querySelector('.box9');

let count=0;
let player1='X';
let player2='O';
let player=player1;

const arr=[[],[],[]];

box1.addEventListener('click',()=>{
   
    if(!box1.innerText && player==player1){
        box1.innerText=player1;
        player=player2;
        const id=box1.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
     
       
    }
    else if(!box1.innerText && player==player2){
        box1.innerText=player2;
        player=player1;
        const id=box1.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }

})
box2.addEventListener('click',()=>{
    if(!box2.innerText && player==player1){
        box2.innerText=player1;
        player=player2;
        const id=box2.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
        
       
    }
    else if(!box2.innerText && player==player2){
        box2.innerText=player2;
        player=player1;
        const id=box2.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
       
    }
    
})
box3.addEventListener('click',()=>{
    if(!box3.innerText && player==player1){
        box3.innerText=player1;
        player=player2;
        const id=box3.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box3.innerText && player==player2){
        box3.innerText=player2;
        player=player1;
        const id=box3.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }
    
})
box4.addEventListener('click',()=>{
    if(!box4.innerText && player==player1){
        box4.innerText=player1;
        player=player2;
        const id=box4.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box4.innerText && player==player2){
        box4.innerText=player2;
        player=player1;
        const id=box4.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }
    
})
box5.addEventListener('click',()=>{
    if(!box5.innerText && player==player1){
        box5.innerText=player1;
        player=player2;
        const id=box5.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box5.innerText && player==player2){
        box5.innerText=player2;
        player=player1;
        const id=box5.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }
    
})
box6.addEventListener('click',()=>{
    if(!box6.innerText && player==player1){
        box6.innerText=player1;
        player=player2;
        const id=box6.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box6.innerText && player==player2){
        box6.innerText=player2;
        player=player1;
        const id=box6.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }
    
})
box7.addEventListener('click',()=>{
    if(!box7.innerText && player==player1){
        box7.innerText=player1;
        player=player2;
        const id=box7.getAttribute('id');
        arr[id[0]][id[1]]=player1;
    
        checkWinner(arr);
       
    }
    else if(!box7.innerText && player==player2){
        box7.innerText=player2;
        player=player1;
        const id=box7.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
        
    }
})
box8.addEventListener('click',()=>{
    if(!box8.innerText && player==player1){
        box8.innerText=player1;
        player=player2;
        const id=box8.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box8.innerText && player==player2){
        box8.innerText=player2;
        player=player1;
        const id=box8.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        checkWinner(arr);
       
    }
})
box9.addEventListener('click',()=>{
    if(!box9.innerText && player==player1){
        box9.innerText=player1;
        player=player2;
        const id=box9.getAttribute('id');
        arr[id[0]][id[1]]=player1;
        checkWinner(arr);
       
    }
    else if(!box9.innerText && player==player2){
        box9.innerText=player2;
        player=player1;
        const id=box9.getAttribute('id');
        arr[id[0]][id[1]]=player2;
        console.log(arr)
        checkWinner(arr);
        
       
    }
    
})
const body=document.querySelector('body');

function checkWinner(arr){
    console.log(arr);

    if(arr[0][0]=='X' && arr[0][1]=='X' && arr[0][2]=='X' ||
         arr[1][0]=='X' && arr[1][1]=='X' && arr[1][2]=='X' ||
         arr[2][0]=='X' && arr[2][1]=='X' && arr[2][2]=='X' ||
         arr[0][0]=='X' && arr[1][0]=='X' && arr[2][0]=='X'  ||
         arr[0][1]=='X' && arr[1][1]=='X' && arr[2][1]=='X'  ||
         arr[0][2]=='X' && arr[1][2]=='X' && arr[2][2]=='X'  ||
         arr[0][0]=='X' && arr[1][1]=='X' && arr[2][2]=='X'  ||
         arr[0][2]=='X' && arr[1][1]=='X' && arr[2][0]=='X'){
            const h1=document.createElement('h1');
              h1.innerText="Player 1 Won";
              h1.classList.add('winnerdec');
              body.appendChild(h1);
              setTimeout(()=>{
                window.location="index.html";
              },5000);
             
              return;
         }
         else if(arr[0][0]=='O' && arr[0][1]=='O' && arr[0][2]=='O' ||
            arr[1][0]=='O' && arr[1][1]=='O' && arr[1][2]=='O' ||
            arr[2][0]=='O' && arr[2][1]=='O' && arr[2][2]=='O' ||
            arr[0][0]=='O' && arr[1][0]=='O' && arr[2][0]=='O'  ||
            arr[0][1]=='O' && arr[1][1]=='O' && arr[2][1]=='O'  ||
            arr[0][2]=='O' && arr[1][2]=='O' && arr[2][2]=='O'  ||
            arr[0][0]=='O' && arr[1][1]=='O' && arr[2][2]=='O'  ||
            arr[0][2]=='O' && arr[1][1]=='O' && arr[2][0]=='O'){
                const h1=document.createElement('h1');
                h1.classList.add('winnerdec');
                  h1.innerText="Player 2 Won";
                  body.appendChild(h1);
                  setTimeout(()=>{
                    window.location="index.html";
                  },5000);
                  return;
             }
             else if((arr[0][0]=='X'|| arr[0][0]=='O' ) && 
                (arr[0][1]=='X'|| arr[0][1]=='O') && 
                (arr[0][2]=='X'|| arr[0][2]=='O') && 
               ( arr[1][0]=='X'|| arr[1][0]=='O') && 
                (arr[1][1]=='X'|| arr[1][1]=='O') && 
                (arr[1][2]=='X'|| arr[1][2]=='O') && 
                (arr[2][0]=='X'|| arr[2][0]=='O' )&& 
                (arr[2][1]=='X'|| arr[2][1]=='O' )&& 
               ( arr[2][2]=='X'|| arr[2][2]=='O' )
             ){
                const h1=document.createElement('h1');
                  h1.innerText="DRAW";
                  h1.classList.add('winnerdec');
                  body.appendChild(h1);
                  setTimeout(()=>{
                    window.location="index.html";
                  },5000);
                  return;
             }
}


