import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import dailyMenu from "./DailyMenu"; // Günlük Menü Verilerini İçe Aktarıyoruz

const DailyMenuComponent = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-10 px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Günlük Yemek Menüsü
          </h1>

          <div className="space-y-10">
            {dailyMenu.map((meal, index) => (
              <Card
                key={index}
                className="bg-card text-card-foreground shadow-md border border-border"
              >
                {/* Öğün Başlığı ve Resmi */}
                <CardHeader className="flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {meal.mealTime}
                  </h2>
                  <img
                    src={meal.image}
                    alt={meal.mealTime}
                    className="w-full max-w-md h-56 object-cover rounded-lg mb-6 shadow-md"
                  />
                </CardHeader>

                {/* Yemekler ve Tarifleri */}
                <CardContent>
                  <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                    Yemekler ve Tarifler:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {meal.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-muted rounded-lg shadow-sm hover:shadow-lg transition-all"
                      >
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.recipe}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-center mt-6">
                  <p className="text-muted-foreground text-sm">
                    Bu menü sizin için hazırlandı!
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DailyMenuComponent;
