const header = document.querySelector('header');
const loader = document.getElementById('preloader');

/*LOAD DO SITE*/
window.addEventListener('load', function(){
    loader.style.display = 'none';
});

/*HEADER*/
window.addEventListener('scroll', function(){
    if (window.scrollY > 100 && header.classList.contains('header_home')){
        header.classList.remove('header_home');
        header.classList.add('header_scrolled');
        document.getElementById('logo_pink').style.width = '200px'
        document.getElementById('perfil').style.width = '50px'
        document.getElementById('perfil').style.height = '50px'
    }else if (window.scrollY == 0 && header.classList.contains('header_scrolled')){
        header.classList.add('header_home');
        header.classList.remove('header_scrolled');
        document.getElementById('logo_pink').style.width = '300px'
        document.getElementById('perfil').style.width = '60px'
        document.getElementById('perfil').style.height = '60px'
    }
});
