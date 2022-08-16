const lists = document.querySelectorAll('.lists')
const nav = document.querySelector('.nav')
const linksWrapper = document.querySelector('.links-wraper')
const humberger = document.querySelector('.humberger') 
const humbo = document.querySelector('.humbergr-men') 
const humbergrMenu = document.querySelector('.humbergr-menu')
const closeIcon = document.querySelector('.close-icon')
lists.forEach((list) => {
    list.addEventListener('click', () => {
        list.classList.toggle('active')
    })
})
// document.body.contentEditable = true;

humberger.addEventListener('click', () => {
    linksWrapper.classList.add('active')
    humbergrMenu.classList.add('active')
})
closeIcon.addEventListener('click', () => {
    linksWrapper.classList.remove('active')
    humbergrMenu.classList.remove('active')
})

