// 1. Demander 5 notes à l'utilisateur
let notes = [];

for (let i = 1; i <= 5; i++) {
    let note = Number(prompt("Entrez la note " + i + " :"));
    notes.push(note);
}

// 2 & 3. Fonction fléchée pour calculer la moyenne
const calculerMoyenne = (tableau) => {
    let somme = 0;
    let compteur = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < 0) {
            console.log("Erreur : note négative ignorée (" + tableau[i] + ")");
        } else {
            somme += tableau[i];
            compteur++;
        }
    }

    return compteur > 0 ? somme / compteur : 0;
};

// 4. Appel de la fonction et affichage
let moyenne = calculerMoyenne(notes);
console.log("La moyenne est : " + moyenne);