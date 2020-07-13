import React from "react";
import Image from "../Image";
import { ImageContainer, Message } from "./Card.styled";

function Card({ title, img, location, width = 300, height = 300 }) {
  return (
    <ImageContainer>
      <Image src={img} alt={title} width={width} height={height} />
      <Message>{title}</Message>
      <span>{location}</span>
    </ImageContainer>
  );
}

export default Card;
