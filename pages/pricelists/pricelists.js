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
