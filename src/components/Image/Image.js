import React, { useState } from "react";
import Observer from "@researchgate/react-intersection-observer";
import { Img } from "./Image.styled";

function Image(props) {
  const [isViewable, setIsViewable] = useState(false);

  function handleIntersection(event) {
    if (event.isIntersecting) {
      setIsViewable(true);
    }
  }

  return (
    <Observer onChange={handleIntersection} threshold={0.9}>
      <Img
        {...props}
        src={isViewable ? props.src : null}
        animate={isViewable}
      />
    </Observer>
  );
}

export default Image;
