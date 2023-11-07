const search = document.querySelector('.site-header-auth-search');
const modal = document.querySelector('.modal');
const rest  = document.querySelector('.modal-btn');


// search.addEventListener('click', ()=>{
//      modal.classList.add('modal-show')
// })

// rest.addEventListener('click', ()=>{
//     modal.classList.remove('modal-show')
// })

function searchiy(){
    modal.classList.add('modal-show');
    document.body.style.overflow = 'hidden'
}


function  restiy(){
    modal.classList.remove('modal-show');
    document.body.style.overflow = ''
}