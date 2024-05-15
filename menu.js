window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
   
})