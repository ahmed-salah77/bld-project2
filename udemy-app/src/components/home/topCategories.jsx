import React from "react";
import "../../css/topCategories.css";
import data from "../../topCategoriesData.json";
import CategoryCard from "./categoryCard";
function TopCategories() {
  const cards = data.category_cards.map(function (element) {
    return <CategoryCard key ={element.id} _card={element} />;
  });
  return (
    <div className = "top-categories-container">
      <div className = "cards-container-1">
        <p style={{fontWeight:"700" ,fontSize:"1.4rem"}}>Top categories</p>
        <div className = "row cards-container-2">{cards}</div>
      </div>
    </div>
  );
}

export default TopCategories;
