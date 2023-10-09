let dropdown = false
let header = document.querySelector('.header')
let lg = document.querySelector('.lg-borderbottom')
let box = document.querySelector('.fa-bars')
let times = document.querySelector('.fa-times')
document.querySelector('.barsbox').addEventListener('click', () => {
    if(dropdown === true){
        dropdown = false
        header.style.height = '2.9rem'
        header.style.overflow = 'hidden'
        lg.style.display = 'none'
        box.style.display = 'block'
        times.style.display = 'none'  
    }else {
        dropdown = true
        header.style.height = '17rem'
        header.style.transition = 'all 0.4s ease-in-out'
        lg.style.display = 'block'
        box.style.display = 'none'
        times.style.display = 'block'
    }
})
let subdropdown = false
let subAbs = document.querySelector('.subabs')
let hiddenBg = document.querySelector('.hiddenbg')
let SDN = document.querySelector('.sdn')
document.querySelector('.eng').addEventListener('click', () => {
    if(subdropdown === true){
        subdropdown = false
        subAbs.style.display = 'none'
        header.style.overflow = 'hidden'
        hiddenBg.style.display = 'none'
        SDN.style.color = '#b01f24'
    }else{
        subdropdown = true
        subAbs.style.display = 'flex'
        header.style.overflow = 'visible'
        hiddenBg.style.display = 'block'
        SDN.style.color = '#021525'
    }
})

let images = [
    '../../assets/images/about-the-company/photo-gallery/airplane_full.jpg',
'../../assets/images/about-the-company/photo-gallery/airplane_left.JPG',
'../../assets/images/about-the-company/photo-gallery/airplane_right.JPG',
'../../assets/images/about-the-company/photo-gallery/truck_backshot.JPG',
'../../assets/images/about-the-company/photo-gallery/people_port.JPG',
'../../assets/images/about-the-company/photo-gallery/structure.JPG',
'../../assets/images/about-the-company/photo-gallery/storage.jpg',
'../../assets/images/about-the-company/photo-gallery/rollover.jpg',
'../../assets/images/about-the-company/photo-gallery/harzadous.jpg',
'../../assets/images/about-the-company/photo-gallery/wrap1.jpg',
'../../assets/images/about-the-company/photo-gallery/wrap2.jpg',
'../../assets/images/about-the-company/photo-gallery/fine-quater.jpg',
'../../assets/images/about-the-company/photo-gallery/truck-partleft.jpg',
'../../assets/images/about-the-company/photo-gallery/truck-left1.jpg',
'../../assets/images/about-the-company/photo-gallery/truck-carry.jpg',
'../../assets/images/about-the-company/photo-gallery/headquarters.jpg',
'../../assets/images/about-the-company/photo-gallery/wrap3.jpeg',
'../../assets/images/about-the-company/photo-gallery/car_workon.png',
'../../assets/images/about-the-company/photo-gallery/loading_plane.jpg',
'../../assets/images/about-the-company/photo-gallery/loading_car.jpg',
'../../assets/images/about-the-company/photo-gallery/car_lined.jpg',
'../../assets/images/about-the-company/photo-gallery/structure2.JPG',
'../../assets/images/about-the-company/photo-gallery/loading_car2.jpg',
'../../assets/images/about-the-company/photo-gallery/loading_car3.jpg',
'../../assets/images/about-the-company/photo-gallery/loading_car4.JPG',
'../../assets/images/about-the-company/photo-gallery/loading_plane2.jpg',
'../../assets/images/about-the-company/photo-gallery/loading_plane3.JPG',
'../../assets/images/about-the-company/photo-gallery/takeoff_plane.JPG',
'../../assets/images/about-the-company/photo-gallery/skyport.jpg',
]

let container = document.querySelector('.pgc-images')
let pgcbutton = document.querySelector('.pgc-btn')
let output = ''
let indexNumber = 8
let indexno = 0
function SplicedImages(num) {
    if(indexno <= 3){
        indexno+=1
    images.splice(0, num).map((item) => {
        output += `<img src='${item}' alt="">`
    })
    container.innerHTML = output
}else {
    pgcbutton.style.backgroundColor = 'grey'
}   
}

SplicedImages(indexNumber)


document.querySelector('.pgc-btn').addEventListener('click', () => {
    SplicedImages(indexNumber)
})

let images2 = ['../../assets/images/about-the-company/catering/assor1.JPG',
'../../assets/images/about-the-company/catering/assor2.JPG', 
'../../assets/images/about-the-company/catering/sphag.JPG', 
'../../assets/images/about-the-company/catering/assor3.JPG', 
'../../assets/images/about-the-company/catering/assor4.JPG',
'../../assets/images/about-the-company/catering/assor5.JPG',
'../../assets/images/about-the-company/catering/assor6.JPG', 
'../../assets/images/about-the-company/catering/assor7.JPG', 
'../../assets/images/about-the-company/catering/double-served1.JPG',
'../../assets/images/about-the-company/catering/double-served2.JPG',
'../../assets/images/about-the-company/catering/double-served3.JPG',
'../../assets/images/about-the-company/catering/double-served4.JPG',
'../../assets/images/about-the-company/catering/double-served5.JPG',
'../../assets/images/about-the-company/catering/double-served6.JPG',
'../../assets/images/about-the-company/catering/catering1.JPG',
'../../assets/images/about-the-company/catering/catering2.JPG',
'../../assets/images/about-the-company/catering/catering3.JPG',
'../../assets/images/about-the-company/catering/catering4.JPG']
let container2 = document.querySelector('.catg-images')
let pgcbutton2 = document.querySelector('.catg-btn')
let output2 = ''
let indexNumber2 = 8
let indexno2 = 0
function SpliceImages(num) {
    if(indexno2 <= 2){
        indexno2+=1
    images2.splice(0, num).map((item) => {
        output2 += `<img src='${item}' alt="">`
    })
    container2.innerHTML = output2
}else {
    pgcbutton2.style.display = 'none'
}   
}

SpliceImages(indexNumber2)


document.querySelector('.catg-btn').addEventListener('click', () => {
    SpliceImages(indexNumber2)
})