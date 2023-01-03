let circle = document.querySelector('.circle')
let toggle = document.querySelector('#toggle')
let switcharea = document.querySelector('#switch-area')

let switchValue = 'off'

function toggleSwitchToGreen() {
    switcharea.style.animation = 'colorChange 0.5s'
    switcharea.style.animationFillMode = 'forwards'
    circle.style.animation = 'slide 0.5s'
    circle.style.animationFillMode = 'forwards'
    switchValue = 'on'
}

function toggleSwitchToRed() {
    switcharea.style.animation = 'colorChangeReverse 0.5s'
    switcharea.style.animationFillMode = 'forwards'
    circle.style.animation = 'slideBackwards 0.5s'
    circle.style.animationFillMode = 'forwards'
    switchValue = 'off'
}


switcharea.addEventListener('click', () => {
    if (switchValue === 'off') {
        toggleSwitchToGreen()
        console.log(switchValue)
    } else if (switchValue === 'on') {
        toggleSwitchToRed()
        console.log(switchValue)
    }
})


