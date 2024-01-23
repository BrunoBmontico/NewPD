const login = document.getElementById('open-login');
const modal = document.getElementById('login-modal');
const loader = document.getElementById('preloader');

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