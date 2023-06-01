import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchIcon />

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </div>
  );
};

export default SearchBar;
