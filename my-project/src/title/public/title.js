import React from "react";

const Title = (param1) => {
return (
    <>
        <h1 className="bg-red-600">{param1.titreText}</h1>
        <p>{param1.paraText}</p>
    </>
    );
};

export default Title;
