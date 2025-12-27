
// 1. Demander un nombre à l'utilisateur
let nombre = Number(prompt("Entrez un nombre :"));

// 2. Boucle pour afficher la table de multiplication
for (let i = 1; i <= 10; i++)
     {

    let resultat = nombre * i;

    // 3. Ignorer les résultats impairs
    if (resultat % 2 !== 0) {
        continue;
    }

    // 4. Afficher uniquement les résultats pairs
    console.log(nombre + " x " + i + " = " + resultat);
}