
document.addEventListener('mousemove', move)

function move(e){
    this.querySelectorAll('.move').forEach(element => {
        const speed = element.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}




gsap.from('.page-404__number', {opacity:0, duration: 1, delay: 0.5, y:10})

gsap.from('.p--404', {opacity:0, duration: 1, delay: 1.1, y:30, stagger: 0.2})

gsap.from('.btn__arrow', {opacity:0, duration: 1, delay: 0.6, y:30})
