// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le formulaire par son ID
    var form = document.getElementById('formulaire');
    // Sélectionner l'élément de message de succès par son ID
    var successMessage = document.getElementById('successMessage');

    // Ajouter un écouteur d'événement pour intercepter la soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Récupération des valeurs des champs du formulaire et suppression des espaces en trop
        var prenom = document.getElementById('prenom').value.trim();
        var nom = document.getElementById('nom').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value;

        // Initialisation de la variable de validation
        var isValid = true;

        // Validation du prénom 
        if (prenom.length < 3 || prenom.length > 15) {
            isValid = false;
            displayErrorMessage('prenom', 'Le prénom doit avoir entre 3 et 15 caractères');
        } else {
            clearErrorMessage('prenom');
        }

        // Validation du nom 
        if (nom.length < 3 || nom.length > 15) {
            isValid = false;
            displayErrorMessage('nom', 'Le nom doit avoir entre 3 et 15 caractères');
        } else {
            clearErrorMessage('nom');
        }

        // Validation de l'email (doit respecter un format standard)
        if (!isValidEmail(email)) {
            isValid = false;
            displayErrorMessage('email', 'Adresse email invalide');
        } else {
            clearErrorMessage('email');
        }

        // Validation du mot de passe (doit contenir au moins 8 caractères)
        if (password.length < 8) {
            isValid = false;
            displayErrorMessage('password', 'Le mot de passe doit contenir au moins 8 caractères');
        } else {
            clearErrorMessage('password');
        }

        // Affichage du message de succès si toutes les validations sont correctes, sinon affichage des erreurs
        if (isValid) {
            successMessage.style.display = 'block'; // Afficher le message de succès
            form.style.display = 'none'; // Cacher le formulaire après une soumission réussie
        }
    });

    // Fonction pour vérifier si l'email a un format valide
    function isValidEmail(email) {
        // Utilisation d'une expression régulière pour valider l'email
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    // Fonction pour afficher un message d'erreur pour un champ spécifique
    function displayErrorMessage(fieldId, message) {
        var errorMessageElement = document.getElementById(fieldId + 'Error'); // Sélectionner l'élément de message d'erreur par ID
        errorMessageElement.innerText = message; // Mettre à jour le texte du message d'erreur
        document.getElementById(fieldId).classList.add('form-control', 'error'); // Ajouter la classe 'error' au champ pour le styliser
    }

    // Fonction pour effacer le message d'erreur pour un champ spécifique
    function clearErrorMessage(fieldId) {
        var errorMessageElement = document.getElementById(fieldId + 'Error'); // Sélectionner l'élément de message d'erreur par ID
        errorMessageElement.innerText = ''; // Vider le texte du message d'erreur
        document.getElementById(fieldId).classList.remove('error'); // Retirer la classe 'error' du champ
    }
});
