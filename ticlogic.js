const block1 = document.getElementById('1')
let player = 1
const myElement = document.getElementById('my-element');
const restart1 = document.getElementById('restart')
const head = document.querySelector('header')
let remover = 0
let badARR = [0,1,2,3,4,5,6,7,8]
console.log(badARR)
let turns = 0

function blockman2(remove){
    remove.removeEventListener('click',(event)=>{})
}

function blockman(change){
    change.addEventListener('click',(event)=>{
    event.preventDefault()
    if (change.style.background === 'blue' || change.style.background === 'red'){
        alert("improper move");
        player-= 1
    }
        else  if(player ==1){
        change.style.background = 'blue';
        player -= 2}
    else{change.style.background = 'red';}
        player += 1
    if(player === 1){
      head.innerHTML = " player 1 turn"   
    }
    else{ head.innerHTML =" player 2 turn"
        }
    console.log(change)
        winning()

    })
    function rome(change){
change.removeEventListener('click',()=>{})
    }
}
// CREATING BOXES AND SETTINT CLASS/ID/EVENTLISTENER
for (i=0; i<9; i++) {
    const newSq = document.createElement('div')
    myElement.appendChild(newSq)
    newSq.setAttribute('class', 'block')
    newSq.innerText = i
    newSq.setAttribute('id', i)
    blockman(newSq)
  
}

// RESTART BUTTON BLOCKS WHITE, RESET ARRAY AND TURNS
restart1.addEventListener('click', (event)=>{
    event.preventDefault()
    for(i=0; i<9; i++){
    let block2 = document.getElementById(i)
    console.log(block2)

    block2.style.background = 'white';
}
badARR = [0,1,2,3,4,5,6,7,8]
turns = 0
console.log(turns)
})

function winning(){
    for(i=0; i<9; i++){
        let block3 = document.getElementById(i)
         if(block3.style.background === 'blue'){
             badARR[i]= 'blue'
         } else if (block3.style.background === 'red'){
            badARR[i]= 'red'
 }
    }
 if(((badARR[0] === badARR[1]&& badARR[1]=== badARR[2]))||
    ((badARR[3] === badARR[4]&& badARR[4]=== badARR[5]))||
    ((badARR[6] === badARR[7]&& badARR[7]=== badARR[8]))||
    ((badARR[0] === badARR[3]&& badARR[3]=== badARR[6]))||
    ((badARR[1] === badARR[4]&& badARR[4]=== badARR[7]))||
    ((badARR[8] === badARR[5]&& badARR[5]=== badARR[2]))||
    ((badARR[0] === badARR[4]&& badARR[4]=== badARR[8]))||
    ((badARR[6] === badARR[4]&& badARR[4]=== badARR[2]))){
        
    if (player !== 1){
        head.innerHTML ="Player 2 wins"
        // for (i=0; i<9; i++){
        // }    
    
    }
    else{
        head.innerHTML ="Player 1 wins"}
    }
    else{
turns += 1
console.log(turns)}
if(turns >= 9){
    head.innerHTML = " THE MATCH IS A DRAW"
}
else{

}
}

function run(){


}