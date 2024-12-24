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
    { id: 10, name: "Bal Kaymak", image: "/images/bal-kaymak.jpg" },
    { id: 11, name: "Simit", image: "/images/simit.jpg" },
  ],
  Çorba: [
    { id: 4, name: "Mercimek Çorbası", image: "/images/mercimek-corbasi.jpg" },
    { id: 5, name: "Ezogelin Çorbası", image: "/images/ezogelin.jpg" },
    { id: 6, name: "Domates Çorbası", image: "/images/domates-corbasi.jpg" },
    { id: 12, name: "Tarhana Çorbası", image: "/images/tarhana-corbasi.jpg" },
    { id: 13, name: "İşkembe Çorbası", image: "/images/iskembe-corbasi.jpg" },
  ],
  "Ana Yemek": [
    { id: 7, name: "Kuru Fasulye", image: "/images/kuru-fasulye.jpg" },
    { id: 8, name: "Tavuk Sote", image: "/images/tavuk-sote.jpg" },
    { id: 9, name: "Mantı", image: "/images/manti.jpg" },
    { id: 14, name: "İskender Kebabı", image: "/images/iskender-kebab.jpg" },
    { id: 15, name: "Lahmacun", image: "/images/lahmacun.jpg" },
    { id: 16, name: "Börek", image: "/images/borek.jpg" },
  ],
  Salata: [
    { id: 17, name: "Çoban Salata", image: "/images/coban-salata.jpg" },
    { id: 18, name: "Peynirli Salata", image: "/images/peynirli-salata.jpg" },
    { id: 19, name: "Mevsim Salata", image: "/images/mevsim-salata.jpg" },
    { id: 20, name: "Akdeniz Salata", image: "/images/akdeniz-salata.jpg" },
  ],
  Tatlı: [
    { id: 21, name: "Baklava", image: "/images/baklava.jpg" },
    { id: 22, name: "Künefe", image: "/images/künefe.jpg" },
    { id: 23, name: "Sütlaç", image: "/images/sutlac.jpg" },
    { id: 24, name: "Kazandibi", image: "/images/kazandibi.jpg" },
  ],
  İçecek: [
    { id: 25, name: "Ayran", image: "/images/ayran.jpg" },
    { id: 26, name: "Şalgam", image: "/images/salgam.jpg" },
    { id: 27, name: "Türk Kahvesi", image: "/images/turk-kahvesi.jpg" },
    { id: 28, name: "Çay", image: "/images/cay.jpg" },
    { id: 29, name: "Limonata", image: "/images/limonata.jpg" },
  ],
};

export default meals;
