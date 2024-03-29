let min = 1,
    max = 10,
    winningNum = 2,
    gussesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNumn = document.querySelector('.max-num'),
    guessbtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min
maxNumn.textContent = max

guessbtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value)

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    if (guess == winningNum) {

        gameOver(true, `${winningNum} is correct, YOU WIN`)
   
        
    }
    else {
        gussesLeft -= 1

        if (gussesLeft === 0) {

            gameOver(false, ` Game over , you lost. The correct numer was ${winningNum}`)
          
            
        } else {
            guessInput.style.borderColor = 'red'
            guessInput.value = ''
            setMessage(`${guess} is not correct, ${gussesLeft} guess left`, 'red')
            
        }
        
    }
})

function gameOver(won, msg) {
    let color
    won = true ? color = 'green' : color = 'red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    message.style.color = color
    setMessage(msg)
    
}


function setMessage(msg,color) {
    message.style.color = color
    message.textContent = msg
}