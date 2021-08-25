// Abre e fecha o menu quando clicar no icone

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}



const menuli = document.querySelectorAll('.menu a');

for(const element of menuli){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}