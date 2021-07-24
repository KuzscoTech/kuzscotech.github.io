import React from "react";
import { NavLink } from "react-router-dom";

function Categories({ filter, categories }) {
  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button
            className="btn-portfolio"
            type="button"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
