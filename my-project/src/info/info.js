import React from "react";

const Info = (props) => {
    return (
    <div className="card">
        <img src={props.src} alt="Profile Picture" />
        <h2>{props.nom}</h2>
        <p>Age : {props.age}</p>
        <p>Taille : {props.taille}</p>
    </div>
    );
};

export default Info;
