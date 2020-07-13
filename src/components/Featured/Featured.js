import React from "react";
import Card from "../Card";
import { Container, Header } from "./Featured.styled";

function Featured({ featuredItems }) {
  return (
    <>
      <Header>Featured</Header>
      <Container>
        <div style={{ display: "inline-flex" }}>
          {featuredItems?.data?.map((item, indx) => (
            <Card {...item} key={indx} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Featured;
