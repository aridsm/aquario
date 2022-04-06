//menu mobile

const btnMobile = document.querySelector('.btn-menu-mobile')
const navMobile = document.querySelector('.inf-header nav')

function openMenu() {
    navMobile.classList.toggle('active');
    if (navMobile.classList.contains('active'))
    btnMobile.innerHTML = '<i class="bi bi-x"></i>'
    else
    btnMobile.innerHTML = '<i class="bi bi-list"></i>'
}

btnMobile.addEventListener('click', openMenu)

//header color

const header = document.querySelector('.inf-header')

function changeColorHeader() {
    const {top} = header.getBoundingClientRect()

    if (top <= 0) header.classList.add('active');
    else header.classList.remove('active')
}

window.addEventListener('scroll', changeColorHeader)

//mostrar horários

const btnSchedules = document.querySelector('.fechado-aberto')
const schedulesContainer = document.querySelector('.horarios-abertos ul')

function showSchedule() {
    schedulesContainer.classList.toggle('active')
    btnSchedules.classList.toggle('active')
}

btnSchedules.addEventListener('click', showSchedule)

//Indicar se está aberto ou fechado

const textOpenOrClose = document.querySelector('.fechado-aberto p')

setInterval(showOpenOrClose, 1000)

function showOpenOrClose() {

    const date = new Date();
    const hourUTC = date.getUTCHours();
    const dayUTC = date.getUTCDay();
    let localHour = setLocalHour();
    let localDay = setLocalDay();

    function setLocalHour() {
        if (hourUTC <= 2) return 24 + hourUTC - 3;
        else return hourUTC - 3
    }
    function setLocalDay() {
        if (hourUTC <= 2) return dayUTC - 1;
        else return dayUTC
    }
    
    function seeOpenOrClose() {
        if (localHour > 8) {
         if (localDay >= 1 && localDay <= 5 && localHour < 17) return 'Aberto'
            else if (localDay == 0 || localDay == 6 && localHour < 12) return 'Aberto'
            else return 'Fechado'
        } else return 'Fechado'
    }

    textOpenOrClose.innerText = seeOpenOrClose() + ' agora';
}

showOpenOrClose()

//slide animais

const itemSlide = document.querySelectorAll('.slide-animais article')
const btnSlidePrevious = document.querySelector('.animal-anterior')
const btnSlideNext = document.querySelector('.animal-posterior')
let indexSlide = 0;

function checkIndex() {
    if (indexSlide > itemSlide.length - 1) indexSlide = 0;
    else if (indexSlide < 0) indexSlide = itemSlide.length - 1;
    changeSlide()
}

function changeSlide() {
    itemSlide.forEach((item) => {
        item.classList.remove('active')
    })
    itemSlide[indexSlide].classList.add('active')
}

btnSlideNext.addEventListener('click', () => {
    ++indexSlide;
    checkIndex()
})
btnSlidePrevious.addEventListener('click', () => {
    --indexSlide;
    checkIndex()
})

checkIndex()

//Accordion

const questionItem = document.querySelectorAll('.perguntas button')

function showAnswer({currentTarget}) {
    const answer = currentTarget.nextElementSibling;

    //pegar o todos os p depois de questions items e tirar a classe active e também fazer
    //o mesmo para o questionItem.

    questionItem.forEach(item => {
        item.classList.remove('active')
        item.nextElementSibling.classList.remove('active')
    })
    answer.classList.add('active')
    currentTarget.classList.add('active')
}


questionItem.forEach(item => item.addEventListener('click', showAnswer))

//teste

const section = document.querySelector('.principal')