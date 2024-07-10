// Attend que le DOM soit entièrement chargé avant d'exécuter la fonction
document.addEventListener('DOMContentLoaded', function() {
    // Récupère le formulaire par son identifiant
    var form = document.getElementById('formulaire');
    // Récupère l'élément pour le message de succès par son identifiant
    var successMessage = document.getElementById('successMessage');

    // Ajoute un écouteur d'événement pour l'événement de soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Récupération des valeurs des champs du formulaire et suppression des espaces superflus
        var prenom = document.getElementById('prenom').value.trim();
        var nom = document.getElementById('nom').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value;

        // Initialise la variable de validation
        var isValid = true;

        // Validation du prénom (entre 3 et 15 caractères)
        if (prenom.length < 3 || prenom.length > 15) {
            isValid = false; // Indique une erreur de validation
            displayErrorMessage('prenom', 'Le prénom doit avoir entre 3 et 15 caractères'); // Affiche le message d'erreur
        } else {
            clearErrorMessage('prenom'); // Efface le message d'erreur si la validation passe
        }

        // Validation du nom (entre 3 et 15 caractères)
        if (nom.length < 3 || nom.length > 15) {
            isValid = false; // Indique une erreur de validation
            displayErrorMessage('nom', 'Le nom doit avoir entre 3 et 15 caractères'); // Affiche le message d'erreur
        } else {
            clearErrorMessage('nom'); // Efface le message d'erreur si la validation passe
        }

        // Validation de l'email (format standard)
        if (!isValidEmail(email)) {
            isValid = false; // Indique une erreur de validation
            displayErrorMessage('email', 'Adresse email invalide'); // Affiche le message d'erreur
        } else {
            clearErrorMessage('email'); // Efface le message d'erreur si la validation passe
        }

        // Validation du mot de passe (minimum 8 caractères)
        if (password.length < 8) {
            isValid = false; // Indique une erreur de validation
            displayErrorMessage('password', 'Le mot de passe doit contenir au moins 8 caractères'); // Affiche le message d'erreur
        } else {
            clearErrorMessage('password'); // Efface le message d'erreur si la validation passe
        }

        // Affichage du message de succès si toutes les validations passent
        if (isValid) {
            successMessage.style.display = 'block'; // Affiche le message de succès
            form.style.display = 'none'; // Cache le formulaire après soumission réussie
        }
    });

    // Fonction pour vérifier le format de l'email
    function isValidEmail(email) {
        // Utilise une expression régulière pour valider le format de l'email
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    // Fonction pour afficher un message d'erreur
    function displayErrorMessage(fieldId, message) {
        // Récupère l'élément pour afficher le message d'erreur
        var errorMessageElement = document.getElementById(fieldId + 'Error');
        // Affiche le message d'erreur dans l'élément
        errorMessageElement.innerText = message;
        // Ajoute les classes 'form-control' et 'error' à l'élément de champ
        document.getElementById(fieldId).classList.add('form-control', 'error');
    }

    // Fonction pour effacer un message d'erreur
    function clearErrorMessage(fieldId) {
        // Récupère l'élément pour afficher le message d'erreur
        var errorMessageElement = document.getElementById(fieldId + 'Error');
        // Efface le message d'erreur dans l'élément
        errorMessageElement.innerText = '';
        // Retire la classe 'error' de l'élément de champ
        document.getElementById(fieldId).classList.remove('error');
    }
});
