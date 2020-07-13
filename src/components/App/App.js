import React, { useState, useEffect } from "react";
import Search from "../Search";
import { getPopular, getFeatured } from "../../api";
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import Featured from "../Featured/Featured";
import ErrorBoundary from "../ErrorBoundary";

function App() {
  const [popularItems, setPopularItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredPopularItems, setFilteredPopularItems] = useState([]);
  useEffect(() => {
    getPopular().then(setPopularItems);
    getFeatured().then(setFeaturedItems);
  }, []);

  const handleSearchChange = (query) => {
    setQuery(query);
    if (query.length > 0) {
      const filteredPopularItems = popularItems?.data?.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPopularItems(filteredPopularItems);
    }
  };

  return (
    <AppContainer>
      <ErrorBoundary>
        <Search onChange={(e) => handleSearchChange(e.target.value)} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Carousel
          popularItems={popularItems}
          showFilter={query.length > 0 ? true : false}
          filteredPopularItems={filteredPopularItems}
        />
        <Featured featuredItems={featuredItems} />
      </ErrorBoundary>
    </AppContainer>
  );
}
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5rem;
  @media (max-width: 480px) {
    margin: 0.2rem;
  }
`;

export default App;
