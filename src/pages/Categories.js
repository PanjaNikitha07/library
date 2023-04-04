import React from "react";
import { CategoriesList } from "../helpers/CategoriesList";
import CategoriesItem from "../components/CategoriesItem";
import "../styles/Categories.css";
import CategoriesTable from "./CategoriesTable";
// import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
function Categories() {

 
  return (
    <div className="categories">
      <h1 className="categoriesTitle">Our Categories</h1>
      <div className="categoriesList">
        {CategoriesList.map((categoriesItem, key) => {
          return (
            <div>
            <CategoriesItem
              key={key}
              image={categoriesItem.image}
              name={categoriesItem.name}
              price={categoriesItem.price}
              

            />
            {/* <CategoriesTable name={categoriesItem.name}/> */}
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default Categories;