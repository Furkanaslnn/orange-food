"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useCategory } from "./CategoryContext";
import Link from "next/link";

interface Recipe {
  ingredients: string[];
  instructions: string;
}

interface Meal {
  id: number;
  name: string;
  image: string;
  recipe: Recipe;
}

interface Meals {
  [category: string]: Meal[];
}

const CategoryMeals = () => {
  const { selectedCategory } = useCategory();
  const [meals, setMeals] = useState<Meals | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/foodrecipe");
        if (!response.ok) {
          throw new Error("Veriler yüklenirken bir hata oluştu.");
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-6 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Yükleniyor...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-6 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Hata
        </h2>
        <p className="text-center">{error}</p>
      </div>
    );
  }

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
        {meals![selectedCategory]?.map((meal) => (
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
              <Link href={""}>
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
