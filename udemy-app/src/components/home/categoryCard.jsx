import React from "react";
import '../../css/categoryCard.css'

const CategoryCard = (props) => {
    return (
        <div className="cat-card col-sm-6 col-md-4 col-lg-3">
            <a className="" href='example.com'>
                <img className = "category-image" src={props._card.image} alt="lohp-category-business-v2" />
                <h3 className="category-title">{props._card.name}</h3>
            </a>
        </div>
    );
};



export default CategoryCard;

