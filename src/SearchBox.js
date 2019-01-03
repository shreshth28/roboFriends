import React from "react";
import './SearchBox.css';
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2" >
      <input
        id="myInput"
        className=" ph1 pa2 ba b--green bg-lightest-blue f6 fw6 ttu tracked" id="myInput"
        type="search"
        placeholder="Search Robots..."
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
