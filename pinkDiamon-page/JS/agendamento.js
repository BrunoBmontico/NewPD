const login = document.getElementById('open-login');
const modal = document.getElementById('login-modal');
const loader = document.getElementById('preloader');
const btnsProcedimento = document.querySelectorAll('.btn-procedimento')

/*load do site*/
window.addEventListener('load', function(){
    loader.style.display = 'none';
});

/*modal login*/
login.addEventListener('click', function(){
    if (modal.classList.contains('closed-modal')){
        modal.classList.remove('closed-modal');
        modal.classList.add('open-modal');
    }else if (modal.classList.contains('open-modal')){
        modal.classList.remove('open-modal');
        modal.classList.add('closed-modal');
    }
});

/*checkbox para escolher procedimento*/
Array.prototype.forEach.call(btnsProcedimento, function(btn){
    btn.addEventListener('click', function(){
        btn.classList.toggle('btn-procedimento-clicado');
    });
});

function search(){
    let searchBar = document.getElementById('search').value;
    let procedimentos = document.getElementsByClassName('name-serv');
    searchBar = searchBar.toLowerCase()

    for (i = 0; i < procedimentos.length; i++){
        if (!procedimentos[i].innerHTML.toLowerCase().includes(searchBar)){
            btnsProcedimento[i].style.display = 'none'
        } else if (procedimentos[i].innerHTML.toLowerCase().includes(searchBar)){
            btnsProcedimento[i].style.display = 'flex'
        }
    }
}