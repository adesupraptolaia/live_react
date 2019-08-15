import React from "react";
import "../Styles/blogs_listing.css";
import search from "../img/search.png";

function BlogsListingSearch() {
  const click = e => {
    e.preventDefault();
  };
  return (
    <button
      className="btn btn-outline-primary my-2 my-sm-0"
      type="submit"
      onClick={() => this.click()}
    >
      <img className="gambarSearch" src={search} />
    </button>
  );
}

export default BlogsListingSearch;
