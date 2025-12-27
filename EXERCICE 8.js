let nom = prompt("Entrez votre nom :");
let age = Number(prompt("Entrez votre âge :"));
let hobbies = prompt("Entrez vos hobbies (séparés par des virgules) :");

let hobbiesTableau = hobbies.split(",");

let utilisateur = {
    nom: nom,
    age: age,
    hobbies: hobbiesTableau
};

let utilisateurJSON = JSON.stringify(utilisateur);
console.log("JSON envoyé :");
console.log(utilisateurJSON);

let jsonServeur = '{"nom":"Alice","age":25,"hobbies":["Lecture","Sport","Musique"]}';
let utilisateurServeur = JSON.parse(jsonServeur);

console.log("JSON reçu du serveur :");
console.log("Nom :", utilisateurServeur.nom);
console.log("Âge :", utilisateurServeur.age);
console.log("Hobbies :", utilisateurServeur.hobbies);