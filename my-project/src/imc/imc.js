import React from "react";

const IMC = ({ nom, taille, poids }) => {
    const resultat = poids / (taille * taille);
    return <p>{nom}: {resultat}</p>;
};

export default IMC;