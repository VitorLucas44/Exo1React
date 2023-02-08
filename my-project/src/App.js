import React from "react";
import Title from "./title/public/title";
import Picture from "./picture/public/picture";
import Info from "./info/info";
import IMC from "./imc/imc";
import Card from "./card/card";

function App() {
  const moi = {
    nom: "Vitor",
    age: 22,
    taille: "1.80m",
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
  };
  const personnes = [
    { nom: "Bonjour", taille: 1.75, poids: 75 },
    { nom: "Bonsoir", taille: 1.65, poids: 60 },
    { nom: "Bye", taille: 1.80, poids: 90 },
  ];
  return (
    <div className="App">
      <Title titreText="Titre principal" paraText="Paragraphe" />
      <Picture
        img1="https://theanalyst.com/wp-content/uploads/2023/01/real-betis-vs-barcelona-prediction-and-preview-1024x715.jpg"
        img2={require("./picture/public/img/events-2.jpg")}
      />
      <Info
        nom={moi.nom}
        age={moi.age}
        taille={moi.taille}
        src={moi.src}
      />
 <>
      {personnes.map((personne) => (
        <IMC
          key={personne.nom}
          nom={personne.nom}
          taille={personne.taille}
          poids={personne.poids}
        />
      ))}
    </>
    <div>
    <Card 
      nom="Lucas" 
      prenom="Vitor" 
      age={22} 
      bgcolor="red" 
      height="400px" 
      width="300px" 
      img="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png" 
    />
  </div>
  <div>
    <Card 
      nom="Molengeek" 
      prenom="Kadri" 
      age={22} 
      bgcolor="green" 
      height="400px" 
      width="300px" 
      img="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png" 
    />
  </div>
  <div>
    <Card 
      nom="Molengeek" 
      prenom="Elias" 
      age={22} 
      bgcolor="yellow" 
      height="400px" 
      width="300px" 
      img="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png" 
    />
  </div>
    </div>
  );
}

export default App;

