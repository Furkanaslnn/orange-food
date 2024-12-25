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
import meals from "./Meals";
import Link from "next/link";

const CategoryMeals = () => {
  const { selectedCategory } = useCategory();

  if (!selectedCategory) {
    return (
      <div className="container mx-auto py-6 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Kategori Seçimi Yapılmadı
        </h2>
        <p className="text-center">
          Lütfen bir kategori seçerek tariflere göz atın.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {selectedCategory} Tarifleri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals[selectedCategory]?.map((meal) => (
          <Card
            key={meal.id}
            className="bg-card text-card-foreground border border-border"
          >
            <CardHeader>
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-max object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-center mb-4">
                {meal.name}
              </h3>
            </CardContent>
            <CardFooter>
              <Link href={`/meal/${meal.id}`}>
                <Button variant="outline" className="w-full">
                  Tarif Detayları
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;
