import React from "react";
import img1 from "./img/events-2.jpg"

const Picture = (props) => {
  return (
    <>
      <img src={props.img1} alt="Image 1" />
      <img src={props.img2} alt="Image 2" />
    </>
  );
};

export default Picture;
