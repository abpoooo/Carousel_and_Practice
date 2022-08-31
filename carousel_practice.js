const imges = [
    `https://m.media-amazon.com/images/I/51OZ2TVANFL._AC_SY200_.jpg`,
    `https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_SY200_.jpg`,
    `https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_SY200_.jpg`,
    `https://m.media-amazon.com/images/I/71j0FLAauxL._AC_SY200_.jpg`,
    `https://m.media-amazon.com/images/I/71EzllGpnBL._AC_SY200_.jpg`
]

const description =[
    `workbook`,
    `crawdad`,
    `seven husbands`,
    `ends with us`,
    `freedom convoy`
]

const data = {
    imges: imges,
    description: description,
    index: 0,
    timerID: null,
    arrButton: []
}

const objects = {
    imges: document.querySelector('.carousel1 img'),
    btnS: document.querySelector('.carousel1 .btnS'),
    navPrev1: document.querySelector('.btnNav.prev'),
    navNext1: document.querySelector('.btnNav.next')
}

const updateSelected = function (index){
    data.arrButton.forEach(function (ele, inx){
        ele.className = ''
        if (inx === index){
            data.arrButton[index].className = 'btnSelected'
        }
    })
    data.arrButton[index].className = 'btnSelected'
}

const update1 = function (index){
    updateSelected(index)
    objects.imges.src = data.imges[index]
}

const timerHandler1 = function (){
    data.index++
    if (data.index === data.imges.length){
        data.index = 0
    }
    update1(data.index)
}

const startInterval = function (){
    timerId = setInterval(timerHandler1, 5000)
}

const stopInterval = function (){
    if (data.timerID){
        clearInterval(data.timerID)
        data.timerID = null
    }
}

const cbClick1 = function (evt){
    let image_id = evt.target.dataset.imgID1
    image_id = Number(image_id)
    objects.imges.src = data.imges[image_id]
    updateSelected(image_id)
    data.index = image_id
}

const cbMouseEnter1 = function (evt){
    stopInterval()
}

const cbMouseLeave1 = function (evt){
    startInterval()
}

const cbPageNext1 = function (evt){
    if (data.index < data.imges.length -1 ){
        data.index++
        update1(data.index)
    }
}

const cbPagePrev1 = function (evt){

    if (data.index > 0){
        data.index--
        update1(data.index)
    }
}

const createCarousel1 = function (){
    objects.imges.src = data.imges[data.index]
    objects.imges.addEventListener('mouseenter', cbMouseEnter1)
    objects.imges.addEventListener('mouseleave', cbMouseLeave1)
    objects.navNext1.addEventListener('click', cbPageNext1)
    objects.navPrev1.addEventListener('click', cbPagePrev1)
    for (let i = 0; i < imges.length; i++){
        let eleBTN = document.createElement('button')
        eleBTN.innerText = data.description[i]
        eleBTN.addEventListener('click', cbClick1)
        eleBTN.dataset.imgID1 = i
        objects.btnS.appendChild(eleBTN)
        data.arrButton.push(eleBTN)

    }
}

startInterval()
createCarousel1()