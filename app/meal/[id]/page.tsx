"use client";

import { useParams } from "next/navigation";
import meals from "../../foodrecipe/Meals";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MealDetail = () => {
  const { id } = useParams();
  const meal = Object.values(meals)
    .flat()
    .find((meal) => meal.id === Number(id));

  if (!meal) {
    return (
      <div className="container mx-auto py-6 px-4 min-h-screen text-center">
        <h1 className="text-2xl font-bold text-destructive">
          Yemek bulunamadı.
        </h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-6 min-h-screen">
        <Card className="bg-card text-card-foreground shadow-lg border border-border">
          <CardHeader className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              {meal.name}
            </h1>
          </CardHeader>
          <CardContent>
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-lg font-medium mb-4">Malzemeler:</p>
            {meal.recipe.ingredients.map((ingredient, index) => (
              <p key={index} className="mb-1">
                👉 {ingredient}
              </p>
            ))}
            <p className="text-lg font-medium mt-6 mb-4">Tarif:</p>
            <p className="mb-4">{meal.recipe.instructions}</p>
          </CardContent>
          <CardFooter className="text-center mt-6">
            <Link href={"/foodrecipe"}>
              <Button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90">
                Geri Dön
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default MealDetail;
