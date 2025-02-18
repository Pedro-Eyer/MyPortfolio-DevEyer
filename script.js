let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFechar = document.getElementById('btn-fechar');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

// Fechar o menu ao clicar em um link
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});

//validação de formulário
function validaFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos');
        return false;
    }
}