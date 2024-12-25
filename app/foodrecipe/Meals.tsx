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

const meals: Meals = {
  Kahvaltılık: [
    {
      id: 1,
      name: "Menemen",
      image: "/images/menemen.jpg",
      recipe: {
        ingredients: [
          "2 adet domates",
          "2 adet yeşil biber",
          "3 adet yumurta",
          "2 yemek kaşığı zeytinyağı",
          "Tuz",
          "Karabiber",
        ],
        instructions:
          "Domatesleri rendeleyin, biberleri doğrayın. Zeytinyağında biberleri kavurun, ardından domatesi ekleyin. Kısık ateşte pişirin, ardından yumurtaları ekleyin ve karıştırarak pişirin.",
      },
    },
    {
      id: 2,
      name: "Sucuklu Yumurta",
      image: "/images/sucuklu-yumurta.jpg",
      recipe: {
        ingredients: [
          "100 gram sucuk",
          "3 adet yumurta",
          "1 yemek kaşığı tereyağı",
        ],
        instructions:
          "Sucukları dilimleyin ve tavada tereyağı ile kızartın. Yumurtaları üzerine kırın ve kısık ateşte pişirin.",
      },
    },
    {
      id: 3,
      name: "Peynir Tabağı",
      image: "/images/peynir-tabagi.jpg",
      recipe: {
        ingredients: [
          "Beyaz peynir",
          "Kaşar peynir",
          "Ezine peyniri",
          "Tulum peyniri",
          "Zeytin",
        ],
        instructions:
          "Farklı peynirleri ve zeytinleri bir tabağa düzenli bir şekilde yerleştirin. İsteğe bağlı olarak meyve dilimleri veya ceviz ekleyin.",
      },
    },
    {
      id: 10,
      name: "Bal Kaymak",
      image: "/images/bal-kaymak.jpg",
      recipe: {
        ingredients: [
          "2 yemek kaşığı bal",
          "2 yemek kaşığı kaymak",
          "Taze ekmek",
        ],
        instructions:
          "Bir dilim ekmek üzerine kaymağı sürün ve üzerine bal dökün. Hemen servis edin.",
      },
    },
    {
      id: 11,
      name: "Simit",
      image: "/images/simit.jpg",
      recipe: {
        ingredients: ["Un", "Su", "Tuz", "Maya", "Pekmez", "Susam"],
        instructions:
          "Hamuru yoğurun ve şekil verin. Pekmezli suya batırıp susama bulayın. Fırında pişirin.",
      },
    },
  ],
  Çorba: [
    {
      id: 4,
      name: "Mercimek Çorbası",
      image: "/images/mercimek-corbasi.jpg",
      recipe: {
        ingredients: [
          "1 su bardağı kırmızı mercimek",
          "1 adet soğan",
          "1 adet havuç",
          "2 yemek kaşığı tereyağı",
          "6 su bardağı su",
          "Tuz",
          "Karabiber",
        ],
        instructions:
          "Mercimek, doğranmış soğan ve havucu bir tencereye alın. Üzerine su ekleyip kaynatın. Malzemeler yumuşayınca blenderdan geçirin. Tereyağında baharatları kavurup üzerine ekleyin ve servis yapın.",
      },
    },
    {
      id: 5,
      name: "Ezogelin Çorbası",
      image: "/images/ezogelin.jpg",
      recipe: {
        ingredients: [
          "1 su bardağı kırmızı mercimek",
          "1 yemek kaşığı pirinç",
          "1 yemek kaşığı bulgur",
          "1 adet soğan",
          "2 diş sarımsak",
          "2 yemek kaşığı salça",
          "2 yemek kaşığı tereyağı",
          "6 su bardağı su",
          "Tuz",
          "Nane",
        ],
        instructions:
          "Mercimek, pirinç ve bulguru suda haşlayın. Ayrı bir tavada soğanı ve sarımsağı kavurup salça ekleyin. Haşlanan malzemelere ekleyip karıştırın. Tereyağında naneyi kızdırarak üzerine dökün.",
      },
    },
    {
      id: 6,
      name: "Domates Çorbası",
      image: "/images/domates-corbasi.jpg",
      recipe: {
        ingredients: [
          "5 adet domates",
          "2 yemek kaşığı un",
          "2 yemek kaşığı tereyağı",
          "5 su bardağı süt",
          "Tuz",
          "Karabiber",
        ],
        instructions:
          "Rendelenmiş domatesleri tereyağında kavurun. Unu ekleyip kavurmaya devam edin. Sütü yavaşça ekleyerek karıştırın. Kıvam alınca baharatları ekleyin ve sıcak servis edin.",
      },
    },
    {
      id: 12,
      name: "Tarhana Çorbası",
      image: "/images/tarhana-corbasi.jpg",
      recipe: {
        ingredients: [
          "5 yemek kaşığı tarhana",
          "6 su bardağı su veya et suyu",
          "2 yemek kaşığı tereyağı",
          "1 yemek kaşığı salça",
          "Tuz",
          "Nane",
        ],
        instructions:
          "Tarhanayı suda çözülmesi için bekletin. Tereyağında salçayı kavurun ve tarhanayı ekleyerek karıştırın. Kaynayana kadar pişirin ve nane ekleyerek servis edin.",
      },
    },
    {
      id: 13,
      name: "İşkembe Çorbası",
      image: "/images/iskembe-corbasi.jpg",
      recipe: {
        ingredients: [
          "500 gram işkembe",
          "6 su bardağı su",
          "2 yemek kaşığı un",
          "2 yemek kaşığı tereyağı",
          "1 yemek kaşığı sirke",
          "2 diş sarımsak",
          "Tuz",
        ],
        instructions:
          "İşkembeyi iyice temizleyip haşlayın ve küçük parçalara kesin. Tereyağında unu kavurup haşlama suyuna ekleyin. İşkembeleri ekleyip kaynatın. Sirke ve dövülmüş sarımsak ile servis edin.",
      },
    },
  ],
  "Ana Yemek": [
    {
      id: 7,
      name: "Kuru Fasulye",
      image: "/images/kuru-fasulye.jpg",
      recipe: {
        ingredients: [
          "2 su bardağı kuru fasulye",
          "1 adet soğan",
          "2 yemek kaşığı salça",
          "2 yemek kaşığı sıvı yağ",
          "250 gram kuşbaşı et (isteğe bağlı)",
          "Tuz",
          "Karabiber",
        ],
        instructions:
          "Fasulyeleri bir gece önceden ıslatın. Soğanı kavurup salça ekleyin. Et kullanıyorsanız eti ekleyip kavurun. Fasulyeleri ve suyu ekleyerek pişirin. Tuz ve karabiber ekleyip sıcak servis edin.",
      },
    },
    {
      id: 8,
      name: "Tavuk Sote",
      image: "/images/tavuk-sote.jpg",
      recipe: {
        ingredients: [
          "500 gram tavuk göğsü",
          "2 adet yeşil biber",
          "2 adet domates",
          "1 adet soğan",
          "2 yemek kaşığı sıvı yağ",
          "Tuz",
          "Karabiber",
          "Pul biber",
        ],
        instructions:
          "Tavukları kuşbaşı doğrayıp sıvı yağda kavurun. Doğranmış soğan, biber ve domatesleri ekleyin. Baharatlarla tatlandırıp pişirin. Sıcak servis edin.",
      },
    },
    {
      id: 9,
      name: "Mantı",
      image: "/images/manti.jpg",
      recipe: {
        ingredients: [
          "2 su bardağı un",
          "1 adet yumurta",
          "1 çay bardağı su",
          "200 gram kıyma",
          "1 adet soğan",
          "Tuz",
          "Yoğurt",
          "Sarımsak",
          "Tereyağı",
          "Pul biber",
        ],
        instructions:
          "Hamuru un, yumurta ve su ile yoğurun. Küçük karelere bölün. Kıyma, rendelenmiş soğan ve tuz karışımını içine koyup kapatın. Mantıları kaynar suya atıp pişirin. Üzerine sarımsaklı yoğurt ve tereyağında kızdırılmış pul biber dökerek servis edin.",
      },
    },
    {
      id: 14,
      name: "İskender Kebabı",
      image: "/images/iskender-kebab.jpg",
      recipe: {
        ingredients: [
          "250 gram döner eti",
          "2 dilim pide ekmeği",
          "2 yemek kaşığı tereyağı",
          "1 çay bardağı domates sosu",
          "Yoğurt",
        ],
        instructions:
          "Pide ekmeklerini küp küp doğrayıp bir tabağa yayın. Üzerine döner etlerini yerleştirin. Domates sosunu ısıtıp üzerine dökün. Tereyağını kızdırarak en üste dökün ve yoğurt ile servis edin.",
      },
    },
    {
      id: 15,
      name: "Lahmacun",
      image: "/images/lahmacun.jpg",
      recipe: {
        ingredients: [
          "2 su bardağı un",
          "1 çay bardağı su",
          "1 çay bardağı yoğurt",
          "250 gram kıyma",
          "1 adet soğan",
          "1 adet domates",
          "Maydanoz",
          "Tuz",
          "Pul biber",
        ],
        instructions:
          "Hamuru un, su ve yoğurtla yoğurun. Küçük bezelere ayırın ve ince açın. Kıyma, doğranmış soğan, domates ve maydanozu karıştırın. Hamurun üzerine harcı sürüp fırında pişirin.",
      },
    },
    {
      id: 16,
      name: "Börek",
      image: "/images/borek.jpg",
      recipe: {
        ingredients: [
          "3 adet yufka",
          "1 çay bardağı sıvı yağ",
          "1 çay bardağı süt",
          "1 adet yumurta",
          "200 gram beyaz peynir",
          "Maydanoz",
        ],
        instructions:
          "Yufkaların arasına sıvı yağ ve süt karışımını sürün. İç harç olarak beyaz peynir ve maydanozu karıştırın. Yufkayı rulo yapıp dilimleyin. Üzerine yumurta sarısı sürüp fırında pişirin.",
      },
    },
  ],
  Salata: [
    {
      id: 17,
      name: "Çoban Salata",
      image: "/images/coban-salata.jpg",
      recipe: {
        ingredients: [
          "2 adet domates",
          "1 adet salatalık",
          "1 adet yeşil biber",
          "1 adet kuru soğan",
          "Maydanoz",
          "Limon suyu",
          "Zeytinyağı",
          "Tuz",
        ],
        instructions:
          "Domates, salatalık, biber ve soğanı küçük küpler halinde doğrayın. Maydanozu ince ince kıyın. Malzemeleri karıştırın, üzerine limon suyu, zeytinyağı ve tuz ekleyip servis edin.",
      },
    },
    {
      id: 18,
      name: "Peynirli Salata",
      image: "/images/peynirli-salata.jpg",
      recipe: {
        ingredients: [
          "2 adet marul yaprağı",
          "1 adet domates",
          "1 adet salatalık",
          "100 gram beyaz peynir",
          "Zeytinyağı",
          "Limon suyu",
          "Tuz",
        ],
        instructions:
          "Marulu doğrayıp servis tabağına alın. Üzerine doğranmış domates ve salatalığı ekleyin. Beyaz peyniri ufalayıp salatanın üzerine serpin. Zeytinyağı, limon suyu ve tuz ile tatlandırın.",
      },
    },
    {
      id: 19,
      name: "Mevsim Salata",
      image: "/images/mevsim-salata.jpg",
      recipe: {
        ingredients: [
          "1 adet havuç",
          "1 adet kırmızı lahana",
          "1 adet marul",
          "1 adet salatalık",
          "Zeytinyağı",
          "Nar ekşisi",
          "Tuz",
        ],
        instructions:
          "Havucu rendeleyin, kırmızı lahanayı ince ince doğrayın. Marul ve salatalığı doğrayarak karıştırın. Üzerine zeytinyağı, nar ekşisi ve tuz ekleyip servis edin.",
      },
    },
    {
      id: 20,
      name: "Akdeniz Salata",
      image: "/images/akdeniz-salata.jpg",
      recipe: {
        ingredients: [
          "1 adet marul",
          "Cherry domates",
          "1 adet salatalık",
          "100 gram lor peyniri",
          "Zeytinyağı",
          "Limon suyu",
          "Tuz",
        ],
        instructions:
          "Marulu doğrayıp servis tabağına alın. Üzerine cherry domates, salatalık dilimleri ve lor peynirini ekleyin. Zeytinyağı, limon suyu ve tuz ile tatlandırıp servis edin.",
      },
    },
  ],
  Tatlı: [
    {
      id: 21,
      name: "Baklava",
      image: "/images/baklava.jpg",
      recipe: {
        ingredients: [
          "500 gram baklavalık yufka",
          "250 gram tereyağı",
          "300 gram ceviz içi",
          "2 su bardağı şeker",
          "2 su bardağı su",
          "Birkaç damla limon suyu",
        ],
        instructions:
          "Yufkaları tepsiye sererken aralarına tereyağı sürün ve ceviz içini serpin. Üzerine kalan yufkaları da aynı şekilde yerleştirin. Dilimleyip fırında kızarana kadar pişirin. Şerbeti hazırlayıp baklavaya dökün ve dinlendirdikten sonra servis edin.",
      },
    },
    {
      id: 22,
      name: "Künefe",
      image: "/images/künefe.jpg",
      recipe: {
        ingredients: [
          "300 gram tel kadayıf",
          "200 gram tuzsuz dil peyniri",
          "100 gram tereyağı",
          "2 su bardağı şeker",
          "1,5 su bardağı su",
          "Birkaç damla limon suyu",
        ],
        instructions:
          "Tel kadayıfı tereyağı ile karıştırıp yarısını tepsiye yayın. Üzerine dil peynirini yerleştirip kalan kadayıfı ekleyin. Ocakta veya fırında kızarana kadar pişirin. Şerbeti hazırlayıp üzerine dökün ve sıcak servis edin.",
      },
    },
    {
      id: 23,
      name: "Sütlaç",
      image: "/images/sutlac.jpg",
      recipe: {
        ingredients: [
          "1 litre süt",
          "1 çay bardağı pirinç",
          "1,5 su bardağı şeker",
          "1 yemek kaşığı nişasta",
          "1 paket vanilin",
        ],
        instructions:
          "Pirinci yıkayıp suda haşlayın. Sütü ekleyip karıştırın ve kaynatın. Şekeri ve vanilini ekleyip nişastayı biraz su ile çözdükten sonra tencereye ekleyin. Kıvam alınca kaselere paylaştırıp soğuk servis edin.",
      },
    },
    {
      id: 24,
      name: "Kazandibi",
      image: "/images/kazandibi.jpg",
      recipe: {
        ingredients: [
          "1 litre süt",
          "2 yemek kaşığı un",
          "2 yemek kaşığı nişasta",
          "1 su bardağı şeker",
          "1 yemek kaşığı tereyağı",
          "1 tatlı kaşığı pudra şekeri",
        ],
        instructions:
          "Un ve nişastayı tereyağında kavurun. Sütü yavaşça ekleyip karıştırın ve kaynatın. Şekeri ekleyip karıştırmaya devam edin. Karışımı bir tepsiye dökün. Altını ocağa koyarak karamelize edin ve soğuyunca dilimleyerek servis edin.",
      },
    },
  ],
  İçecek: [
    {
      id: 25,
      name: "Ayran",
      image: "/images/ayran.jpg",
      recipe: {
        ingredients: [
          "2 su bardağı yoğurt",
          "1 su bardağı su",
          "Tuz (isteğe bağlı)",
        ],
        instructions:
          "Yoğurt ve suyu bir kaba alın ve çırpın. İsteğe bağlı olarak tuz ekleyip karıştırın. Soğuk servis edin.",
      },
    },
    {
      id: 26,
      name: "Şalgam",
      image: "/images/salgam.jpg",
      recipe: {
        ingredients: [
          "1 litre su",
          "2 adet siyah havuç",
          "1 adet pancar",
          "1 tatlı kaşığı tuz",
          "1 tatlı kaşığı limon tuzu",
          "Mayalı ekmek parçası (fermentasyon için)",
        ],
        instructions:
          "Havuç ve pancarı doğrayın. Tuz, limon tuzu ve suyu karıştırarak malzemeleri ekleyin. Mayalı ekmek parçasını içine koyup karanlık bir yerde birkaç gün bekletin. Fermentasyon tamamlanınca süzüp soğuk servis edin.",
      },
    },
    {
      id: 27,
      name: "Türk Kahvesi",
      image: "/images/turk-kahvesi.jpg",
      recipe: {
        ingredients: [
          "1 tatlı kaşığı Türk kahvesi",
          "1 fincan su",
          "Şeker (isteğe bağlı)",
        ],
        instructions:
          "Cezveye kahve, su ve isteğe bağlı şeker ekleyin. Orta ateşte karıştırarak köpürmesini bekleyin. Köpüğü fincana alın, kalan kahveyi bir taşım kaynatıp üzerine dökün. Sıcak servis edin.",
      },
    },
    {
      id: 28,
      name: "Çay",
      image: "/images/cay.jpg",
      recipe: {
        ingredients: ["2 yemek kaşığı siyah çay", "1 litre su"],
        instructions:
          "Demlikte çayı koyun ve üzerine kaynar su ekleyin. 10-15 dakika demlenmeye bırakın. Fincanlara servis edin.",
      },
    },
    {
      id: 29,
      name: "Limonata",
      image: "/images/limonata.jpg",
      recipe: {
        ingredients: [
          "3 adet limon",
          "1 su bardağı şeker",
          "1 litre su",
          "Buz (isteğe bağlı)",
        ],
        instructions:
          "Limonların kabuğunu rendeleyip şekerle ovun. Limonları sıkıp suyu ekleyin. Karışımı süzün ve soğutun. Buz ekleyerek servis edin.",
      },
    },
  ],
};

export default meals;
