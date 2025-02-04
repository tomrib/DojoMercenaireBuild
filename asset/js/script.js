document.addEventListener('DOMContentLoaded', function () {
    const boutons = document.querySelectorAll('.boutonHome button');
    const contenus = document.querySelectorAll('.contenu');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function () {
            const idContenu = "contenu" + this.id.replace('bouton', '');

            contenus.forEach(contenu => contenu.classList.remove('active'));
            boutons.forEach(btn => btn.classList.remove('active'));

            document.getElementById(idContenu).classList.add('active');
            this.classList.add('active');
        });
    });

    const tankButtons = document.querySelectorAll('#tank1, #tank2, #tank3, #tank4, #tank5, #tank6');
    const tankContents = document.querySelectorAll('.boxTank');

    tankButtons.forEach(button => {
        button.addEventListener('click', function () {
            const idContenu = "boxTank" + this.id.replace('tank', '');

            tankContents.forEach(content => content.classList.remove('active'));
            tankButtons.forEach(btn => btn.classList.remove('active'));

            document.getElementById(idContenu).classList.add('active');
            this.classList.add('active');
        });
    });
});