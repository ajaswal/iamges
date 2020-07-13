import React from "react";
import { SearchInput } from "./Search.styled";
function Search(props) {
  return <SearchInput {...props} placeholder="Search for ..." />;
}

export default Search;
