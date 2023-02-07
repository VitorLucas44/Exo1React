import React from "react";
import Title from "./title/public/title";
import Picture from "./picture/public/picture";
import Info from "./info/info";

function App() {
  const moi = {
    nom: "Vitor",
    age: 22,
    taille: "1.80m",
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
  };
  return (
    <div className="App">
      <Title titreText="Titre principal" paraText="Sous-titre" />
      <Picture
        img1="https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/800px-Pikachu-DEPS.png"
        img2={require("./picture/public/img/events-2.jpg")}
      />
      <Info
        nom={moi.nom}
        age={moi.age}
        taille={moi.taille}
        src={moi.src}
      />
    </div>
  );
}

export default App;

