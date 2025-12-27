// 1. Tableau de produits (objets)
const produits = [
    { nom: "Clavier", prix: 200, quantite: 10 },
    { nom: "Souris", prix: 100, quantite: 5 },
    { nom: "Ecran", prix: 1500, quantite: 2 }
];

// 2. Fonction pour afficher les produits
function afficherProduits() {
    for (const produit of produits) {
        console.log(
            "Produit: " + produit.nom +
            " | Prix: " + produit.prix +
            " Dh | Quantité: " + produit.quantite
        );
    }
}

// 3. Fonction pour vendre un produit
function vendreProduit(nomProduit, quantiteVendue) {
    for (const produit of produits) {
        if (produit.nom === nomProduit) {
            if (produit.quantite >= quantiteVendue) {
                produit.quantite -= quantiteVendue;
                console.log("Vente réussie de " + quantiteVendue + " " + nomProduit);
            } else {
                console.log("Erreur : stock insuffisant pour " + nomProduit);
            }
            return;
        }
    }
    console.log("Erreur : produit non trouvé");
}

// Tests
afficherProduits();
vendreProduit("Souris", 3);
afficherProduits();