"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useCategory } from "./CategoryContext";

interface Meal {
  id: number;
  name: string;
  image: string;
}

interface Meals {
  [key: string]: Meal[];
}

const meals: Meals = {
  Kahvaltılık: [
    { id: 1, name: "Menemen", image: "/images/menemen.jpg" },
    { id: 2, name: "Sucuklu Yumurta", image: "/images/sucuklu-yumurta.jpg" },
    { id: 3, name: "Peynir Tabağı", image: "/images/peynir-tabagi.jpg" },
  ],
  Çorba: [
    { id: 4, name: "Mercimek Çorbası", image: "/images/mercimek-corbasi.jpg" },
    { id: 5, name: "Ezogelin Çorbası", image: "/images/ezogelin.jpg" },
    { id: 6, name: "Domates Çorbası", image: "/images/domates-corbasi.jpg" },
  ],
  "Ana Yemek": [
    { id: 7, name: "Kuru Fasulye", image: "/images/kuru-fasulye.jpg" },
    { id: 8, name: "Tavuk Sote", image: "/images/tavuk-sote.jpg" },
    { id: 9, name: "Mantı", image: "/images/manti.jpg" },
  ],
};

const CategoryMeals = () => {
  const { selectedCategory } = useCategory();

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {selectedCategory} Tarifleri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals[selectedCategory]?.map((meal: Meal) => (
          <Card
            key={meal.id}
            className="bg-card text-card-foreground border border-border"
          >
            <CardHeader>
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">{meal.name}</h3>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Tarif Detayları
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;
