import React from "react";
import CategoryContent from "./CategoryContent";

function Category({ match }) {
  return <CategoryContent category={match.params.category} />;
}

export default Category;
