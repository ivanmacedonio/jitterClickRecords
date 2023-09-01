
///timer 
const btn = document.querySelector('.clickCounterContainer')
let clicks = 0
const counter = document.createElement('h1')
const timer = document.querySelector('.time')
let timeleft = 5
let intervalo
const button = document.querySelector('#start')

///records
const records = []
const recordsContainer = document.querySelector('.recordsContainer')



function renderRecords(arr){

    recordsContainer.innerHTML = '';
    
    if(arr[0] !== null){
        arr.forEach((record)=>{
            const recordContainer = document.createElement('span')
            recordContainer.textContent = record
            recordsContainer.appendChild(recordContainer)    
        })  
    }
}


button.addEventListener('click', e=> {
    button.classList.add('started')
    eventInterval()
    clearInterval(intervalo)
    timeleft = 5
    timerCountdown()
    intervalo = setInterval(timerCountdown, 1000)
})



function timerCountdown(){
    if (timeleft > 0){
        timeleft --
        timer.innerHTML = `${timeleft}S Restantes`
        console.log(timeleft)
    } else {
        btn.removeEventListener('click', manejarEvento)
        clearInterval(intervalo)
        button.classList.remove('started')
        timer.innerHTML = `Sin tiempo`
        records.unshift(clicks)
        counter.textContent = ''
        clicks = 0
        renderRecords(records)
             
    }
    
}

function manejarEvento(){
    if (btn){
        clicks = clicks + 1
        counter.textContent = clicks
        btn.appendChild(counter)
    } else {
        alert('NO BTN')
    }   
}


function eventInterval(){
    btn.addEventListener('click', manejarEvento)
}

