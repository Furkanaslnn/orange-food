"use client";

import React, { createContext, useContext, useState } from "react";

// Context için Tip Tanımlamaları
interface CategoryContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// Varsayılan değer
const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

// Provider Bileşeni
export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Kahvaltılık");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Context'i Kullanmak İçin Bir Hook
export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
