import React from "react";
import Header from "../components/Header";

import CategoryMeals from "./categorymeals";
import { CategoryProvider } from "./CategoryContext";
import Categories from "./categories";

const FoodRecipe = () => {
  return (
    <div>
      <Header />
      <CategoryProvider>
        <div className="container mx-auto">
          <Categories />
          <CategoryMeals />
        </div>
      </CategoryProvider>
    </div>
  );
};

export default FoodRecipe;
