import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "../Chevron";
import Card from "../Card";
import { Container, Chevron, Header } from "./Carousel.styled";

const IMAGE_WIDTH = 300;

function Carousel({ popularItems, filteredPopularItems, showFilter }) {
  const containerElement = useRef(null);

  const paginate = (direction) => {
    const leftPosition =
      containerElement.current.scrollLeft +
      `${direction === "prev" ? -1 : 1}` * IMAGE_WIDTH;

    containerElement.current.scrollTo({
      top: 0,
      left: leftPosition,
      behavior: "smooth",
    });
  };

  const items = showFilter ? filteredPopularItems : popularItems?.data;

  if (items?.length === 0) {
    return <Header>No popular items found</Header>;
  }

  return (
    <>
      <Header>Popular around you </Header>

      <Chevron
        onClick={() => {
          paginate("prev");
        }}
      >
        <ChevronLeft />
      </Chevron>

      <Chevron
        right={true}
        onClick={() => {
          paginate("next");
        }}
      >
        <ChevronRight />
      </Chevron>

      <Container ref={containerElement}>
        {items?.map((item, indx) => (
          <Card {...item} key={indx} />
        ))}
      </Container>
    </>
  );
}

export default Carousel;
