import React, { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import MenuCard from "./MenuCard";

const allCategories = ["all", ...new Set(data?.map((item) => item.category))];
const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  console.log(data);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categories categories={allCategories} filterItems={filterItems} />
          <MenuCard items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default Menu;
