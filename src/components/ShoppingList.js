import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items
          // filter to selected
          .filter((item) => {
            if (selectedCategory === "All") {
              return true;
            } else {
              return item.category === selectedCategory;
            }
          })
          // convert to Item
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
