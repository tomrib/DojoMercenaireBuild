document.addEventListener('DOMContentLoaded', function () {
    const boutons = document.querySelectorAll('button');
    const contenus = document.querySelectorAll('.contenu');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function () {
            const idContenu = this.id.replace('bouton', 'contenu'); // Récupérer l'ID du contenu associé

            // Masquer tous les contenus
            contenus.forEach(contenu => contenu.classList.remove('active'));

            // Afficher le contenu correspondant au bouton cliqué
            document.getElementById(idContenu).classList.add('active');
        });
    });
});
