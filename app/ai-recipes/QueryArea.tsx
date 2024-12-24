"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
const QueryArea = () => {
  const [ingredients, setIngredients] = useState(""); // Kullanıcı girdisi
  const [recipe, setRecipe] = useState(""); // Tarif sonucu

  const handleGenerateRecipe = async () => {
    // Backend işlem simülasyonu
    setTimeout(() => {
      setRecipe(
        "Verilen malzemelerle örnek bir yemek tarifi: Tavuk sarımsak soslu zeytinyağında kızartılır, üzerine baharat eklenir ve pilav ile servis edilir. Afiyet olsun!"
      );
    }, 1500);
  };
  return (
    <div>
      {" "}
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')", // Arka plan resmi yolu
        }}
      >
        {/* İçerik Alanı */}
        <div className=" m-20 w-full max-w-3xl p-10 bg-card text-card-foreground rounded-3xl shadow-lg border border-border">
          <h1 className="text-3xl font-bold text-center mb-6">Tarif Bulucu</h1>
          {/* Giriş Alanı */}
          <Input
            placeholder="Malzemelerinizi yazın (örnek: Tavuk, sarımsak, zeytinyağı)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full mb-4 h-16"
          />
          <Button
            onClick={handleGenerateRecipe}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Tarifi Gör
          </Button>

          {/* Tarif Alanı */}
          {recipe && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Tarif</h2>
              <Textarea
                readOnly
                value={recipe}
                className="w-full bg-muted text-muted-foreground border-border rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryArea;
