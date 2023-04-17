function readFormData() {
    //lire la valeur saisie par l'utilisateur
    const email = document.getElementById("email").value;
    //si l'email est vide alors afficher l'erreur trim = supprimer les espaces length et recuperer la longueur
    const longueur = email.trim().length
    console.log(longueur);
    if(longueur == 0){
        document.getElementById("email-error").style.display = 'block'; 
    } else {
        document.getElementById("email-error").style.display = 'none';
    }

    //rechercher @ s'il n'ya pas @ afficher l'erreur
    if(email.indexOf('@') === -1){
        document.getElementById("email-error").style.display = 'block'; 
    } else {
        document.getElementById("email-error").style.display = 'none';
    }
    //rechercher . s'il n'ya pas . afficher l'erreur
    if(email.indexOf('.') === -1){
        document.getElementById("email-error").style.display = 'block'; 
    } else {
        document.getElementById("email-error").style.display = 'none';
    }
    console.log(email);
} 

function validateField(fieldId){
    const value = document.getElementById(fieldId).value;
    console.log(value, typeof value);
    if(isNaN(value)) {
       document.getElementById("telephone-error").style.display = "block"; 
    } else {
        document.getElementById("telephone-error").style.display = "none";
    }
}