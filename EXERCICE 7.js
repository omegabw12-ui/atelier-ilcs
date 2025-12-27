function saisieSecurisee() {
    try {
        let saisie = prompt("Entrez un nombre entre 1 et 100 :");
        let nombre = Number(saisie);

        // Vérifier si ce n'est pas un nombre
        if (isNaN(nombre)) {
            throw "Erreur : la saisie n'est pas un nombre.";
        }

        // Vérifier la plage
        if (nombre < 1 || nombre > 100) {
            throw "Erreur : le nombre doit être entre 1 et 100.";
        }

        // Si tout est valide
        alert("Nombre valide saisi : " + nombre);

    } catch (erreur) {
        alert(erreur);
    }
}