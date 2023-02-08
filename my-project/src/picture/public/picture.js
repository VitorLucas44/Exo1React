import React from "react";
import img1 from "./img/events-2.jpg"

const Picture = (param1) => {
  return (
    <>
      <img src={param1.img1} alt="Image 1" />
      <img src={param1.img2} alt="Image 2" />
    </>
  );
};

export default Picture;