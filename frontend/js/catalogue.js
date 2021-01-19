let dataProduits = request("http://localhost:3000/api/cameras");
dataProduits.then((produits) => {
  produits.forEach((produit) => {
    afficheProduit(produit);
  });
});
