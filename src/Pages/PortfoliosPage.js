import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import { useState } from "react";
import portfolios from "../Components/allportfolios";
import Title from "../Components/Title";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories categories={categories} filter={filter} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
