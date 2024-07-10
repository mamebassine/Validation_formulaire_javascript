document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulaire');
    var successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Récupération des valeurs des champs
        var prenom = document.getElementById('prenom').value.trim();
        var nom = document.getElementById('nom').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value;

        // Validation des champs
        var isValid = true;

        // Validation du prénom (entre 3 et 15 caractères)
        if (prenom.length < 3 || prenom.length > 15) {
            isValid = false;
            displayErrorMessage('prenom', 'Le prénom doit avoir entre 3 et 15 caractères');
        } else {
            clearErrorMessage('prenom');
        }

        // Validation du nom (entre 3 et 15 caractères)
        if (nom.length < 3 || nom.length > 15) {
            isValid = false;
            displayErrorMessage('nom', 'Le nom doit avoir entre 3 et 15 caractères');
        } else {
            clearErrorMessage('nom');
        }

        // Validation de l'email (format standard)
        if (!isValidEmail(email)) {
            isValid = false;
            displayErrorMessage('email', 'Adresse email invalide');
        } else {
            clearErrorMessage('email');
        }

        // Validation du mot de passe (minimum 8 caractères)
        if (password.length < 8) {
            isValid = false;
            displayErrorMessage('password', 'Le mot de passe doit contenir au moins 8 caractères');
        } else {
            clearErrorMessage('password');
        }

        // Affichage du message de succès ou d'erreur
        if (isValid) {
            successMessage.style.display = 'block';
            form.style.display = 'none'; // Cache le formulaire après soumission réussie
        }
    });

    // Fonction pour vérifier le format de l'email
    function isValidEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    // Fonction pour afficher un message d'erreur
    function displayErrorMessage(fieldId, message) {
        var errorMessageElement = document.getElementById(fieldId + 'Error');
        errorMessageElement.innerText = message;
        document.getElementById(fieldId).classList.add('form-control', 'error');
    }

    // Fonction pour effacer un message d'erreur
    function clearErrorMessage(fieldId) {
        var errorMessageElement = document.getElementById(fieldId + 'Error');
        errorMessageElement.innerText = '';
        document.getElementById(fieldId).classList.remove('error');
    }
});
