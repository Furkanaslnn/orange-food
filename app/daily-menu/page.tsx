import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DailyMenu = () => {
  const dailyMenu = [
    {
      mealTime: "Kahvaltı",
      items: ["Peynir", "Zeytin", "Ekmek", "Reçel", "Çay"],
      image: "/breakfast.jpg",
    },
    {
      mealTime: "Öğle Yemeği",
      items: ["Mercimek Çorbası", "Tavuk Sote", "Pirinç Pilavı", "Ayran"],
      image: "/lunch.jpg",
    },
    {
      mealTime: "Akşam Yemeği",
      items: ["Kuru Fasulye", "Bulgur Pilavı", "Turşu", "Şalgam"],
      image: "/dinner.jpg",
    },
  ];
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-primary/10">
        <div className="container mx-auto py-10 px-6">
          <h1 className="text-3xl font-bold text-center mb-10 text-primary">
            Günlük Menü
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {dailyMenu.map((meal, index) => (
              <Card
                key={index}
                className="bg-card text-card-foreground shadow-lg border border-border "
              >
                <CardHeader className="text-center">
                  <h2 className="text-xl font-bold text-primary">
                    {meal.mealTime}
                  </h2>
                </CardHeader>
                <CardContent>
                  <img
                    src={meal.image}
                    alt={meal.mealTime}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <ul className="text-muted-foreground list-disc pl-5">
                    {meal.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="text-center mt-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Daha Fazla Detay
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DailyMenu;
