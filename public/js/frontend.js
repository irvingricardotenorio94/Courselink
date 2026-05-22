//Add logic for modal mainmenu

const btnSobreMe = document.getElementById('btn-sobremi');

const modal      = document.getElementById('modal-sobremi');

const infSobreMe = document.getElementById('info-perfil');

const btnClose = document.getElementById('btn-cerrar')

btnSobreMe.addEventListener('click', function(event){

    event.preventDefault();

    modal.style.display = 'flex';

    infSobreMe.innerText = "Hola, soy Full-Stack Developer apasionado por crear soluciones web limpias y eficientes utilizando tecnologías modernas.";

});

btnClose.addEventListener('click', function(){

  modal.style.display = 'none';

})

window.addEventListener('click', function(event){

    if (event.target === modal){

        modal.style.display = 'none'

    }
})

