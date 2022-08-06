const nav = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar')
const burger = document.querySelector('.burger');
const navLinks =  document.querySelectorAll('.nav-links li')
// toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('active')

// animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
// burger animation
    burger.classList.toggle('toggle')
    
});



navBar.addEventListener('scroll', () => {
    navBar.classList
})

const submit = document.querySelector('.submit')
const HisName = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')


submit.addEventListener('click', (e) => {
    // const getName = HisName.value 
    // const getEmail = email.value 
    // const getMessage = message.value
    console.log('rak dkit')
    HisName.value = ''
    email.value = ''
    message.value = ''
})