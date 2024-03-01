let number1 = Math.floor(Math.random() * 6 + 1)

let number2 = Math.floor(Math.random() * 6 + 1)

let src1 = '../images/dice' + number1 + '.png'

let src2 = '../images/dice' + number2 + '.png'

document.querySelectorAll('img')[0].setAttribute('src', src1)

document.querySelectorAll('img')[1].setAttribute('src', src2)

if(number1 > number2) {
    document.querySelector('#h1-end').innerHTML = '🏆Jodador 1 Venceu!'
} else if(number2 > number1) {
    document.querySelector('#h1-end').innerHTML = '🏆Jodador 2 Venceu!'
} else {
    document.querySelector('#h1-end').innerHTML = 'Empate...'
}

    