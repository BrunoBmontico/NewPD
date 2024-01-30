const loader = document.getElementById('preloader');
const login = document.getElementById('open-login')
const modal = document.getElementById('login-modal');
const edit = document.getElementById('edit');
const blockInputs = document.getElementById('block');

/*load do site*/
window.addEventListener('load', function(){
    loader.style.display = 'none';
});

/*modal login*/
login.addEventListener('click', function(){
    if (modal.classList.contains('closed-modal')){
        modal.classList.remove('closed-modal');
        modal.classList.add('open-modal');
    } else if (modal.classList.contains('open-modal')){
        modal.classList.remove('open-modal');
        modal.classList.add('closed-modal');
    }
});

/*botão de edit*/
edit.addEventListener('click', function(){
    if (blockInputs.classList.contains('block-inputs')){
        blockInputs.classList.remove('block-inputs');
        blockInputs.classList.add('open-inputs');
        document.getElementById('inputs').style.opacity = 1
    } else if (blockInputs.classList.contains('open-inputs')){
        blockInputs.classList.remove('open-inputs');
        blockInputs.classList.add('block-inputs');
        document.getElementById('inputs').style.opacity = 0.5
    }
});

