let password = "";
// Boucle pour permettre plusieurs entrées
while (password !== "exit") {

    password = prompt("Entrez un mot de passe (ou tapez 'exit' pour quitter) :");

    // Si l'utilisateur veut quitter
    if (password === "exit") 
        {alert("Sortie du programme.");
        break;}

    let force = "";

    // Vérification de la longueur
    if (password.length < 8) {
        force = "faible"; } 
        else 
    
    if (password.length >= 8 && password.length <= 12) {
        force = "moyen";
    } else {
        force = "fort";
    }

    
     alert("La force du mot de passe est : " + force)
}
