// 1. Tableau prédéfini de notes
let notes = [10, 15, 8, 18, 12];

// 2. Tri par ordre croissant
notes.sort(function(a, b) {
    return a - b;
});

console.log("Notes triées par ordre croissant :"+notes);

// 3. Affichage avec arrêt si note < 10
for (let i = 0; i < notes.length; i++) {
    if (notes[i] < 10) {
        console.log("Note inférieure à 10 détectée : " + notes[i]);
        break;
    }
    console.log(notes[i]);
}

// 4. Tri par ordre décroissant
notes.reverse();

console.log("Notes triées par ordre décroissant :"+ notes);

for (let i = 0; i < notes.length; i++) {
    if (notes[i] < 10) {
        console.log("Note inférieure à 10 détectée : " + notes[i]);
        break;
    }
    console.log(notes[i]);
}