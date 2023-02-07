import React from "react";

const Title = (props) => {
return (
    <>
        <h1 className="bg-red-600">{props.titreText}</h1>
        <p>{props.paraText}</p>
    </>
    );
};

export default Title;
