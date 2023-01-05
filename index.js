let toggle = document.querySelector('#toggle')
let switchArea = document.querySelector('#switcharea')
let loaderOne = document.querySelector('#loader1')
let firstSlider = document.querySelector('#slider1')
let secondSlider = document.querySelector('#slider2')
let squares = document.querySelector('.square')
let sqOne = document.querySelector('#one')
let sqTwo = document.querySelector('#two')
let sqThree = document.querySelector('#three')
let sqFour = document.querySelector('#four')
let sqFive = document.querySelector('#five')
let sqSix = document.querySelector('#six')
let sqSeven = document.querySelector('#seven')
let sqEight = document.querySelector('#eight')
let sqNine = document.querySelector('#nine')
let sqTen = document.querySelector('#ten')

let toggleValue = 'off'

toggle.addEventListener('click', () => {
    console.log('clicked')
    if (toggleValue === 'off' ) {
        toggle.style.animation = 'toggleOn 1s'
        toggle.style.animationFillMode = 'forwards'
        toggleValue = 'on'

        loaderOne.style.animation = 'loaderPosition 5s infinite'
        firstSlider.style.animation = 'loading 5s infinite'
        secondSlider.style.animation = 'sliderTwo 3s linear infinite'

        sqOne.style.animation = 'btOne 2s linear infinite'       
        sqTwo.style.animation = 'btTwo 2s linear infinite'
        sqThree.style.animation = 'btThree 2s linear infinite'
        sqFour.style.animation = 'btFour 2s linear infinite'
        sqFive.style.animation = 'btFive 2s linear infinite'
        sqSix.style.animation = 'btSix 2s linear infinite'
        sqSeven.style.animation = 'btSeven 2s linear infinite'
        sqEight.style.animation = 'btEight 2s linear infinite'
        sqNine.style.animation = 'btNine 2s linear infinite'
        sqTen.style.animation = 'btTen 2s linear infinite'

    } else if (toggleValue === 'on') {
        toggle.style.animation = 'toggleOff 1s'
        toggle.style.animationFillMode = 'forwards'
        toggleValue = 'off'

        loaderOne.style.animation = ''
        firstSlider.style.animation = ''
        secondSlider.style.animation = ''

        sqOne.style.animation = ''
        sqTwo.style.animation = ''
        sqThree.style.animation = ''
        sqFour.style.animation = ''
        sqFive.style.animation = ''
        sqSix.style.animation = ''
        sqSeven.style.animation = ''
        sqEight.style.animation = ''
        sqNine.style.animation = ''
        sqTen.style.animation = ''
    }
})