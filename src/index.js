import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let data= {
  header:[
    {
    nombre:{es:"Entradas frías", en:"Appetizers Fresh"},
    link:"frias",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-1.svg"
    },
    {
    nombre:{es:"Entradas Calientes", en:"Appetizers hot"},
    link:"calientes",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-2.svg"
    },
    {
    nombre:{es:"Frescos", en:"Raw bar"},
    link:"frescos",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-3.svg"
    },
    {
    nombre:{es:"Tacos", en:"Tacos & Quesadillas"},
    link:"tacos",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-4.svg"
    },
    {
    nombre:{es:"Sopas & Ensaladas", en:"Soups & Salads"},
    link:"sopas",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-5.svg"
    },
    {
    nombre:{es:"Langostas", en:"Lobsters"},
    link:"langostas",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-7.svg"
    },
    {
    nombre:{es:"Pesca del día", en:"Catch of the day"},
    link:"pescadeldia",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-6.svg"
    },
    {
    nombre:{es:"Arroz y pastas", en:"Rice & Pasta"},
    link:"arrozypastas",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-9.svg"
    },
    {
    nombre:{es:"Principales", en:"Main Courses"},
    link:"principales",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-8.svg"
    },
    {
    nombre:{es:"Selecciones Premium", en:"Premium Selects"},
    link:"selecionespremium",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-11.svg"
    },
    {
    nombre:{es:"Complementos", en:"Sides"},
    link:"complementos",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/06/ICON.FREDSMesa-de-trabajo-10.svg"
    },
    {
    nombre:{es:"Postres", en:"Desserts"},
    link:"postres",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/ICON_POSTRE.svg"
    },
    {
    nombre:{es:"Mixología", en:"Mixology"},
    link:"mixologia",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/ICON-MIXO.svg"
    },
    {
    nombre:{es:"Destilados", en:"Spirits"},
    link:"https://fredshouserestaurant.com/menudigital/destilados.pdf",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/ICON-MIXO.svg"
    },
  ], 
menu:[{
  nombre: {es:"Frías",en:"Fresh"},
  id:"frias",
  platos:[
      {
      nombre:{es:"TOSTADA DE ATÚN ", en:"TUNA SLICE TOSTADA"},
      qty:{es:"1 pza", en:"1 pc"},
      descripcion:{es:"Aderezo de chipotle y cilantro, cebolla caramelizada y aguacate", en:"Chipotle and coriander mayonnaise, caramelized onion and avocado "},
      precio:"135",
      tipo:"comun",
      img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Tostada-de-atun-freds.jpg"
      },
      {
          nombre:{es:"TÁRTARA DE ATÚN SAKU*", en: "TUNA SAKU TARTAR*"},
          qty:{es:"120 g", en:"4 oz"},
          descripcion:{es:"Pepino, aguacate, ajonjolí, ponzu, aceite de oliva y crocante de zanahoria",en: "Cucumber, avocado, sesame, ponzu, olive oil and carrot crunchies "},
          precio:"260",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/TARTARA-DE-ATUN-SAKU-freds.jpg"

      },
      {
          nombre:{es:"AGUACHILE VERDE DE CAMARÓN*",en:"GREEN SHRIMP AGUACHILE*"},
          descripcion:{es:"Pepino, cebolla morada y chile serrano ", en:"Cucumber, red onion and serrano chili "},
          qty:{es:"150 g", en:"5 oz"},
          precio:"290",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Aguachile-verde-camaron-freds-1.jpg"
      },
      {
          nombre:{es:"COCTÉL DE CAMARÓN*",en:"SHRIMP COCKTAIL*"},
          descripcion:{es:"Estilo americano ", en:"American style "},
          qty:{es:"5 oz", en:"Chocolate cake"},
          precio:"280",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/09/Screen-Shot-2022-09-26-at-1.23.55-PM.png"
      },
      {
          nombre:{es:"AGUACHILE TATEMADO*",en:" FRED´S AGUACHILE*"},
          descripcion:{es:"Camarón, aguacate, jitomate, cebolla cambray y cilantro. En salsa especial de la casa", en:"Shrimp, avocado, tomato, spring onion and coriander. In our special house sauce "},
          qty:{es:"150 g", en:"5 oz"},
          precio:"320",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Aguachile-tatemado-freds-1.jpg"
      },
      {
          nombre:{es:"TIRADITO DE SALMÓN EXÓTICO*",en:"EXOTIC SALMON TIRADITO*"},
          descripcion:{es:"Salsa de maracuyá, soya, fresas, arúgula baby y sal ", en:"Passion fruit sauce, soy, strawberries, baby arugula and salt "},
          qty:{es:"120 g", en:"5 oz"},
          precio:"280",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Tiradito-de-salmon-freds.jpg"
      },
      {
          nombre:{es:"CARPACCIO DE BETABEL ",en:"BEETROOT SLICED "},
          descripcion:{es:"Champiñones, tomates deshidratados, mango, queso parmesano y aceite de oliva ", en:"Mushrooms, dried tomatoes, mango, parmesan cheese and olive oil "},
          qty:{es:null, en:null},
          precio:"150",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Carpaccio-betabel-freds-1.jpg"
      },
      {
          nombre:{es:"CALLO DE HACHA",en:"SCALLOP"},
          descripcion:{es:["Preparaciones a elegir","Aguachile chiltepín","Tiradito tropical","Aguachile verde estilo Sinaloa"], en:["To choose from","Chiltepin chili aguachile","Tropical tiradito","Green aguachile sauce, Sinaloa style"]},
          qty:{es:"200 g", en:"7 oz"},
          precio:"380",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/callo-de-hacha-1.jpg"
      },
      {
          nombre:{es:"CAMARONES PARA PELAR ",en:"SHRIMPS TO PEEL"},
          descripcion:{es:"Sin cabeza, cocidos.Con aderezo FRED´S ysalsa coctelera ", en:"Fully cooked. With FRED´S dressing and cocktail sauce "},
          qty:{es:"350 g", en:"12 oz"},
          precio:"580",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/09/camarones-para-pelar-720x720.jpg"
      },
  ]
},{
nombre: {es:"Calientes",en:"Hot"},
id:"calientes",
platos:[
    {
    nombre:{es:"CRAB CAKE", en:"CRAB CAKE"},
    qty:{es:"1 pza", en:"1 pc"},
    descripcion:{es:"Ensalada fresca, aderezo tártara y tomate cherry", en:"Fresh salad, tartar dressing and cherry tomatoes"},
    precio:"380",
    tipo:"comun",
    video:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/CRAB-CAKE_480x854_FREDS.mp4"
    },
    {
    nombre:{es:"GUACAMOLE PLACERO", en:"GUACAMOLE"},
    qty:null,
    descripcion:{es:"Queso panela y chicharrón de cerdo con adobo de chiles", en:"Panela cheese and pork rinds with chili adobo"},
    precio:"140",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Guacamole-Placero-FREDS.jpg"
    },
    {
    nombre:{es:"MEJILLONES CHORIZO", en:"CHORIZO MUSSELS"},
    qty:{es:"350 g", en:"12 oz"},
    descripcion:{es:"Salsa de tomate, albahaca, vodka y chorizo español. Con pan baguette", en:"Tomato sauce, basil, vodka and Spanish chorizo. With baguette bread"},
    precio:"220",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/mejillones-chorizo-freds.jpg"
    },
    {
    nombre:{es:"CALAMARES PRETZEL", en:"PRETZEL CALAMARI"},
    qty:{es:"200 g", en:"7 oz"},
    descripcion:{es:"Aderezo tártara y salsa de tomate ", en:"Tartar dressing and tomato sauce"},
    precio:"240",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/CALAMARES-PRETZEL-FREDS.jpg"
    },
    {
    nombre:{es:"TEMPURA TUNA BITES", en:"TEMPURA TUNA BITES"},
    qty:{es:"100 g", en:"3.5 oz"},
    descripcion:{es:"Marinadas en salsa ponzu. Con guacamolada y aderezo de chipotle ", en:"Marinated in ponzu sauce. With guacamolada and chipotle dressing"},
    precio:"280",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/tempura-tuna-bites.jpg"
    },
    {
    nombre:{es:"PULPO CRUJIENTE", en:"TUNA SLICE TOSTADA"},
    qty:null,
    descripcion:{es:"Tzatziki de chipotle y vinagreta de chile guajillo", en:"xChipotle tzatziki and guajillo chili vinaigrette"},
    precio:"280",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/PULPO-CRUJIENTE-FREDS.jpg"
    },
    {
    nombre:{es:"OSTIONES ROCKEFELLER*", en:"ROCKEFELLER OYSTERS*"},
    qty:{es:"350 g", en:"6 pcs"},
    descripcion:{es:"Queso mozzarella, espinaca, crema y tocino ", en:"Mozzarella cheese, sautéed spinach, cream and bacon"},
    precio:"390",
    tipo:"comun",
    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Ostiones-Rockefeller-FREDS.jpg"
    },
  ]
},{
  nombre: {es:"BARRA DE FRESCOS",en:"RAW BAR"},
  id:"frescos",
  platos:[
      {
      nombre:{es:"ALMEJAS BAJA*", en:"BAJA CLAMS*"},
      qty:{es:"6 pzas", en:"6 pcs"},
      descripcion:{es:"Jugo de limón amarillo, pepino, cebolla morada, tomate cherry, aceite de ajonjolí y aceite de cilantro", en:"Lime juice, cucumber, red onion, cherry tomato, sesame oil and coriander oil "},
      precio:"350",
      tipo:"comun",
      img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/ALMEJAS-BAJA-FREDS.jpg"
      },
      {
      nombre:{es:"ALMEJAS CHOCOLATA*", en:"CHOCOLATE CLAMS*"},
      qty:{es:"6 pzas", en:"1 pc"},
      descripcion:{es:["Salsa rasurada a escoger","Ponzu y aceite de ajonjolí","Tropical con mango"], en:["Sauce to choose","Ponzu and sesame oil","Tropical with mango",]},
      precio:"320",
      tipo:"comun",
      img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Almeja-Chocolata.jpg"
      },
      {
      nombre:{es:"OSTIONES COSTA ESTE*", en:"EAST COAST OYSTERS*"},
      qty:{es:"6 pzas", en:"1 pc"},
      descripcion:{es:["Salsa rasurada a escoger","Ponzu y aceite de ajonjolí","Tropical con mango"], en:["Sauce to choose","Ponzu and sesame oil","Tropical with mango",]},
      precio:"350",
      tipo:"comun",
      img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Ostiones-costa-este-freds.jpg"
      },
      {
        nombre:{es:"CEVICHE YUCATECO", en:"YUCATAN CEVICHE"},
        qty:{es:"150 g", en:"5 oz"},
        descripcion:{es:"Pepino, cebolla morada, cilantro, chile habanero y aguacate", en:"Avocado, coriander, red onion and habanero chilli"},
        extra:{es:["A elegir",[{variedad:"Camarón",	precio:"$290"}, {variedad:"Pescado*",	precio:"$290"}, {variedad:"Pulpo",	precio:"$320"},{variedad:"Mixto*",	precio:"$320"}]], en:["To choose from", [{variedad:"Shrimp",	precio:"$290"},{variedad:"Fish*",	precio:"$290"},{variedad:"Octopus",	precio:"$290"},{variedad:"Mixed*",	precio:"$290"}]]},
        precio:null,
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Ceviche-Yucateco-FREDS.jpg"
      },
      {
        nombre:{es:"CEVICHE CARIBEÑO", en:"CARIBBEAN CEVICHE"},
        qty:{es:"100 g", en:"5 oz"},
        descripcion:{es:"Aguacate, cebolla morada, jícama, mango, pepino y jitomate. Sobre un carpaccio de piña con sal y aceite de guajillo", en:"Avocado, red onion, jicama, mango, cucumber and tomato. On a pineapple carpaccio with salt and guajillo oil"},
        extra:{es:["A elegir",[{variedad:"Camarón",	precio:"$320"}, {variedad:"Pescado*",	precio:"$320"}, {variedad:"Pulpo",	precio:"$340"},{variedad:"Mixto*",	precio:"$340"}]], en:["To choose from", [{variedad:"Shrimp",	precio:"$290"},{variedad:"Fish*",	precio:"$290"},{variedad:"Octopus",	precio:"$340"},{variedad:"Mixed*",	precio:"$340"}]]},
        precio:null,
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Ceviche-Caribeno-FREDS.jpg"
      },
    ]
  },{
    nombre: {es:"TACOS & QUESADILLAS",en:"TACOS & QUESADILLAS"},
    id:"tacos",
    platos:[
        {
        nombre:{es:"TACOS DE SALMÓN", en:"SALMON TACOS"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Tortilla de maíz hecha a mano con costra de queso, salsa de frijol, guacamole, cebolla caramelizada y cilantro. Con salsa de clamato y chiltepín", en:"Handmade corn tortilla with cheese crust, bean sauce, guacamole, caramelized onion and coriander. Clamato and chiltepin sauce"},
        precio:"320",
        tipo:"comun",
        video:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/09/Tacos-de-salmon.mp4"
        },
        {
        nombre:{es:"JAIBA CRUJIENTE", en:"CRUNCHY CRAB"},
        qty:{es:"2 pzas", en:"2 pcs"},
        descripcion:{es:"Tortilla de jícama fresca, aderezo de tamarindo y pepino. Con ensalada fresca de col ", en:"Fresh jicama tortilla, tamarind and cucumber dressing. With fresh coleslaw"},
        precio:"360",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Tacos-jaiba-crujiente-freds.jpg"
        },
        {
        nombre:{es:"TACOS AL PASTOR", en:"PASTOR TACOS"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Carne al pastor vegana, piña y cilantro. Con salsa verde guacamolada", en:"Vegan marinated meat, pineapple and coriander. With avocado green sauce "},
        precio:"380",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/tacos-pastor-freds.jpg"
        },
        {
        nombre:{es:"CAMARÓN ADOBADO", en:"MARINADED SHRIMP"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Tortilla de maíz, con ensalada de col mixta, aguacate, cilantro y aderezo de chipotle", en:"Corn tortilla, with mixed cabbage salad, avocado, cilantro and chipotle dressing"},
        precio:"240",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/tacos-camaron-adobado-freds.jpg"
        },
        {
        nombre:{es:"PESCADO REBOZADO", en:"BAJA STYLE"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Tortilla de harina, ensalada de col mixta y cilantro", en:"Flour tortilla, battered fish, coleslaw and coriander"},
        precio:"220",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/tacod-de-pescado-rebozado-freds.jpg"
        },
        {
        nombre:{es:"LOBSTER QUESADILLA", en:"LOBSTER QUESADILLAS"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Tortilla de harina. Mezcla de quesos con tocino, langosta y cebolla cambray. Con papas fritas, guacamole y chiles encurtidos", en:"Flour tortillas, cheese blend, bacon, lobster and spring onion. With french fries, guacamole and pickled chili peppers "},
        precio:"550",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/LOBSTER-QUESADILLAS-1.jpg"
        },
    ]},{
    nombre: {es:"SOPAS & ENSALADAS",en:"SOUPS & SALADS"},
    id:"sopas",
    platos:[
        {
        nombre:{es:"CLAM CHOWDER ", en:"CLAM CHOWDER "},
        qty:null,
        descripcion:{es:"Almejas chirlas al vino blanco, papa brunoise, crocante de tocino y pulpa de almeja blanca ", en:"Clams in white wine, brunoise potatoes, crispy bacon and white clam pulp "},
        precio:"280",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/CLAM-CHOWDER-1024x1024.jpg"
        },
        {
        nombre:{es:"ENSALADA CÉSAR*", en:"TRADITIONAL CAESAR*"},
        qty:null,
        descripcion:{es:"Receta original", en:"Original recipe."},
        extra:{es:[null,[{variedad:"Con camarón", precio: "$330"}]],en:[null,[{variedad:"With shrimp ", precio: "$330"}]]},
        precio:"240",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Ensalada-cesar-FREDS.jpg"
        },
        {
        nombre:{es:"CREMA DE LANGOSTA", en:"LOBSTER BISQUE"},
        qty:null,
        descripcion:{es:"Macedonia de langosta ", en:"Lobster medallion "},
        precio:"280",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/crema-de-langosta-freds.jpg"
        },
      ]
    },{
      nombre: {es:"LANGOSTAS",en:"LOBSTERS"},
      sub1:{es:"¡LAS JOYAS DE FRED’S!",en:"A FRED’S MUST!"},
      sub2:{es:"EL ÚNICO RESTAURANTE EN CANCÚN CON 6 PREPARACIONES DIFERENTES. ",en:"THE ONLY RESTAURANT IN CANCUN WITH 6 DIFFERENT PREPARATIONS"},
      id:"langostas",
      platos:[
          {
          nombre:{es:"THERMIDOR SUPREME", en:"THERMIDOR SUPREME"},
          qty:{es:"800 g", en:"28 oz"},
          descripcion:{es:"Mantequilla, champiñones, salsa bechamel y mozzarella. Flameada con brandy", en:"Butter, mushrooms, bechamel sauce and mozzarella. Flamed with brandy"},
          precio:"2,200",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/THERMIDOR-SUPREME.jpg"
          },
          {
          nombre:{es:"COLA DE LANGOSTA CARIBEÑA", en:"CARIBBEAN LOBSTER TAIL"},
          qty:{es:"300 g", en:"10.5 oz"},
          descripcion:{es:["Preparaciones a elegir","Al mojo de ajo","A la talla","A la mantequilla","Asada al carbón","Al vapor "], en:["To choose from", "Garlic mojo","Butter","Grilled","Steamed","Adobo chilli"]},
          precio:"1,400",
          tipo:"comun",
          img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/THERMIDOR-SUPREME.jpg"
          },
        ]
      },{
        nombre: {es:"LOBSTER ROLLS & BURGERS",en:"LOBSTER ROLLS & BURGERS"},
        platos:[
            {
            nombre:{es:"HAMBURGUESA DE RIB EYE", en:"RIB EYE BURGUER"},
            qty:{es:"200 g", en:"7 oz"},
            descripcion:{es:"Queso mozzarella, aderezo de roquefort, salsa de carne con jerez y ensalada de arúgula. Con papas fritas, aderezo de carne y queso parmesano", en:"Mozzarella cheese, roquefort dressing, gravy with sherry sauce and arugula salad. With french fries, gravy dressing and parmesan cheese "},
            precio:"420",
            tipo:"comun",
            video:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/HAMBURGUESA_480x854_FREDS.mp4"
            },
            {
            nombre:{es:"RED HOOK ROLL", en:"RED HOOK ROLL"},
            qty:null,
            descripcion:{es:"Cola de langosta (150 g), apio, limón, mayonesa, mantequilla, cebollín y mostaza Dijon", en:"Lobster tail (4 oz), celery, lemon, mayonnaise, butter, chives and Dijon mustard "},
            precio:"620",
            tipo:"comun",
            img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Red-hook-roll-freds.jpg"
            },
            {
            nombre:{es:"CLASSIC ROLL", en:"CLASSIC ROLL"},
            qty:null,
            descripcion:{es:"Cola de langosta (150 g) a la mantequilla, con ensalada de col: Zanahoria, manzana, limón y mayonesa", en:"Lobster tail (4 oz) in butter, with coleslaw: Carrot, apple, lemon and mayonnaise"},
            precio:"620",
            tipo:"comun",
            img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/clasic-roll-freds.jpg"
            },
            {
            nombre:{es:"HAMBURGUESA DE SALMÓN", en:"SALMON BURGUER"},
            qty:{es:"200 g", en:"7 oz"},
            descripcion:{es:"Mayonesa de jengibre-mostaza, salsa de tomate, queso mozzarella y ensalada de arúgula. Con papas fritas, mayonesa de jengibre-sriracha y mousse de aguacate ", en:"Ginger mustard mayonnaise, tomato sauce, mozzarella cheese and arugula salad. With french fries, sriracha-ginger mayonnaise and avocado mousse "},
            precio:"320",
            tipo:"comun",
            img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/HAMBURGUESA-DE-SALMON.jpg"
            },
          ]
        },{
          nombre: {es:"PESCA DEL DÍA",en:"CATCH OF THE DAY"},
          id:"pescadeldia",
          platos:[
              {
              nombre:{es:"PESCADO ENTERO", en:"FISH"},
              qty:{es:"850 g", en:"30 oz"},
              descripcion:{es:["Preparaciones a elegir", "Frito con hojuelas de ajo", "A la talla", "A la sal flameado "], en:["To choose from", "Fried with garlic flakes", "Grilled with guajillo chilli", "Flamed with salt"]},
              precio:"880",
              tipo:"comun",
              img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/elementor/thumbs/pescado-pvccy6m4immazpghfp4yb4y9usc0n4hpnoektam9oo.jpg"
              },
              {
              nombre:{es:"ALASKAN KING CRAB", en:"ALASKAN KING CRAB"},
              qty:{es:"350 g", en:"12 oz"},
              descripcion:{es:["Preparaciones a elegir","Natural","Mantequilla con hoja santa","Mojo de ajo","Asado al carbón "], en:["To choose from","Natural","Butter with scent leaf","Garlic sauce","Grilled"]},
              precio:"2,800",
              tipo:"comun",
              img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Alaskan-king-crab-freds.jpg"
              },
              {
              nombre:{es:"MANOS DE CANGREJO MORO", en:"STONE CRAB"},
              qty:{es:"400 g", en:"14 oz"},
              descripcion:{es:["Preparaciones a elegir","Frescas con Aliño de lima","A la mantequilla","Flameadas con whiskey"], en:["To choose from","Fresh with lime dressing","Butter","Flamed with whiskey"]},
              precio:"740",
              tipo:"comun",
              img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/manos-de-cangrejo-moro-freds-1.jpg"
              }
            ]
          },{
            nombre: {es:"ARROZ Y PASTA",en:"RICE & PASTA"},
            id:"arrozypastas",
            platos:[
                {
                nombre:{es:"PAELLA DI MARE ", en:"PAELLA DI MARE"},
                qty:null,
                descripcion:{es:"Arroz redondo con pescado, camarones, pulpo, mejillones, almeja, calamar, pollo, cerdo, pimiento, chícharos y ejotes ", en:"Grouper fish, shrimps, octopus, black mussels, clams, calamari, chicken, pork, bell pepper, peas and green beans "},
                precio:"480",
                tipo:"comun",
                video:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/PAELLA_480x854_FREDS.mp4"
                },
                {
                nombre:{es:"ARROZ A LA TUMBADA", en:"TUMBADA RICE"},
                qty:null,
                descripcion:{es:"Mejillones negros, camarones, almejas chirlas, jaiba entera y pulpo ", en:"Black mussels, shrimps, clams, whole crab and octopus "},
                precio:"420",
                tipo:"comun",
                },
                {
                nombre:{es:"RISOTTO", en:"RISOTTO"},
                qty:null,
                descripcion:{es:"Champiñones salteados, setas y vino blanco (vegano)", en:"Sautéed mushrooms and white wine"},
                precio:"360",
                tipo:"comun",
                img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/09/IMG_8318.jpg"
                },
                {
                nombre:{es:"RISOTTO DE CALLO DE HACHA", en:"SCALLOPS RISOTTO"},
                qty:{es:"", en:"14 oz"},
                descripcion:{es:"Setas, espárragos, vino blanco, queso parmesano y aceite de trufa", en:"Mushrooms, asparagus, white wine, parmesan cheese and truffle oil"},
                precio:"380",
                tipo:"comun",
                img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/09/risotto-1024x1024.jpg"
                },
                {
                nombre:{es:"MAC & CHEESE CON LANGOSTA", en:"LOBSTER MAC & CHEESE"},
                qty:null,
                descripcion:null,
                precio:"620",
                tipo:"comun",
                img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Mac-and-chesse-langosta-freds.jpg"
                },
                {
                nombre:{es:"FRED-TTUCCINI CON CAMARONES", en:"SHRIMP FRED-TUCCINI"},
                qty:{es:"", en:"14 oz"},
                descripcion:{es:"Salsa de queso y vino blanco", en:"Cheese blend and white wine"},
                precio:"360",
                tipo:"comun",
                img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/freddtuccini.jpg"
                },
                {
                nombre:{es:"CAPELLINI DE SALMÓN", en:"SALMON CAPELLINI"},
                qty:null,
                descripcion:{es:"Mantequilla de limón, chile seco, piñones, vino blanco y bocados de salmón",en:"Lemon butter, dried chili, pine nuts, white wine and salmon bites"},
                precio:"390",
                tipo:"comun",
                img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/capellinii-de-salmon-1.jpg"
                },
              ]
            },{
              nombre: {es:"PRINCIPALES",en:"MAIN COURSES"},
              id:"principales",
              platos:[
                  {
                  nombre:{es:"FISH N’ CHIPS", en:"FISH N’ CHIPS"},
                  qty:{es:"180 g", en:""},
                  descripcion:{es:"Salsa de piña-mango y salsa tártara con papas fritas ", en:"Mango-pineapple sauce, tartar sauce and french fries"},
                  precio:"330",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Fish-n-chips-FREDS.jpg"
                  },
                  {
                  nombre:{es:"FILETE DE PESCADO A LOS TRES CHILES", en:"DRIED CHILLI-CRUSTED FISH FILLET"},
                  qty:{es:"250 g", en:"9 oz"},
                  descripcion:{es:"Con costra de chile pasilla, chipotle y morita", en:"Pasilla, chipotle and morita chili crust"},
                  precio:"480",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/filete-de-pescado-a-los-3-chiles-1024x1024.jpg"
                  },
                  {
                  nombre:{es:"FILETE DE PESCADO AL GUSTO", en:"FISH FILLET"},
                  qty:{es:"240 g", en:"9 oz"},
                  descripcion:{es:[null,"A la talla", "A la talla", "A la parrilla", "A la diabla"], en:[null,"Garlic mojo","Grilled","Adobo chili","A la diabla"]},
                  precio:"445",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Filete-al-gusto-freds.jpg"
                  },
                  {
                  nombre:{es:"SALMÓN A LA PARRILLA", en:"GRILLED SALMON"},
                  qty:{es:"285 g", en:"10 oz"},
                  descripcion:{es:"Salsa de pimientos rojos, espárragos y papas smash", en:"Red bell pepper sauce, asparagus and smashed potatoes"},
                  precio:"480",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/salmon-a-la-parrilla.jpg"
                  },
                  {
                  nombre:{es:"ATÚN MIGNON", en:"TUNA MIGNON"},
                  qty:{es:"285 g", en:"5 oz"},
                  descripcion:{es:"Envuelto en tocino, sellado a la plancha. Con puré de papa, espárragos a la mantequilla, tomates cherry tatemados y salsa de jerez", en:"Wrapped in bacon, seared on the grill. With mashed potatoes, buttered asparagus, roasted cherry tomatoes and sherry sauce "},
                  precio:"420",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/salmon-a-la-parrilla.jpg"
                  },
                  {
                  nombre:{es:"ENCHILADAS DE CANGREJO", en:"CRAB ENCHILADAS"},
                  qty:{es:"3 pzas", en:"3 pcs"},
                  descripcion:{es:"Tortilla de maíz. Con mezcla de quesos, tocino y pulpa de cangrejo Lump", en:"In corn tortillas with cheese blend, bacon and Lump crab meat"},
                  precio:"480",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Enchiladas-cangrejo.jpg"
                  },
                  {
                  nombre:{es:"PULPO CON TUÉTANO", en:"OCTOPUS WITH BONE MARROW"},
                  qty:{es:"280 g", en:"10 oz"},
                  descripcion:{es:"Marinado con salsa talla, tomate asado y aceite de oliva", en:"Adobo chili sauce, roasted tomato and olive oil"},
                  precio:"850",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/PULPO-EN-TUETANO-FREDS.jpg"
                  },
                  {
                  nombre:{es:"CAMARONES MOJO", en:"MOJO SHRIMP"},
                  qty:{es:"200 g", en:"7 oz"},
                  descripcion:{es:"Preparados al mojo de ajo. Con crocante de plátano macho y arroz negro", en:"Garlic sauce, crispy plantain and black rice"},
                  precio:"380",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/IMG_7508.jpg"
                  },
                  {
                  nombre:{es:"CAMARONES COCOCRUJIENTES", en:"FLAMED CRISPY COCONUT SHRIMP"},
                  qty:{es:"200 g", en:"7 oz"},
                  descripcion:{es:"Con coco, salsa de piña habanero y arroz primavera. Flameados con ron en mesa", en:"Coconut and habanero pineapple sauce. With spring rice. Flamed tableside with rum"},
                  precio:"420",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/CAMARONES-COCO-CRUJIENTES-FREDS.jpg"
                  },
                  {
                  nombre:{es:"POLLO CRISPY", en:"CRISPY CHICKEN"},
                  qty:{es:"200 g", en:"7 oz"},
                  descripcion:{es:"Pechuga de pollo crujiente y gravy. Con puré de papa y elote amarillo a la parrilla", en:"Crispy chicken breast and gravy. With mashed potatoes and grilled yellow corn"},
                  precio:"280",
                  tipo:"comun",
                  img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/pollo-crispy-1.jpg"
                  },
                  {
                  nombre:{es:"FILETE MIGNON", en:"MIGNON FILETE"},
                  qty:{es:"225 g", en:"8 oz"},
                  descripcion:{es:"Con salsa de jerez y champiñones ", en:"Sherry sauce and mushrooms"},
                  precio:"640",
                  tipo:"comun",
                  },
                  {
                    nombre:{es:"RIB EYE", en:"RIB EYE"},
                    qty:{es:"350 g", en:"12 oz"},
                    descripcion:{es:"Con elote amarillo a la parrilla y miel mostaza ", en:"Grilled yellow corn and honey mustard"},
                    precio:"780",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/RIB-EYE-FREDS.jpg"
                  },
                  {
                  nombre:{es:"CAMARONES COCOCRUJIENTES", en:"BEEF FILLET"},
                  qty:{es:"600 g", en:"21 oz"},
                  descripcion:{es:"De res, sellado en la parrilla. Con mantequilla de ajo rostizado y perejil. Preparado en mesa y flameado con mezcal", en:"Seared on the grill. With roasted garlic butter and parsley.Prepared tableside and flamed with mezcal"},
                  precio:"1,350 ",
                  tipo:"comun",
                  },
                  {
                  nombre:{es:"GRAND TOMAHAWK", en:"GRAND TOMAHAWK"},
                  qty:{es:"1.2 Kg", en:"41 oz"},
                  descripcion:{es:"High Choice", en:"High Choice"},
                  precio:"3,100",
                  tipo:"comun",
                  },
                ]
              },{
                nombre: {es:"SELECCIONES PREMIUM",en:"PREMIUM SELECTS"},
                id:"selecionespremium",
                platos:[
                    {
                    nombre:{es:"FUENTE DE MARISCOS ROYAL", en:"SHELLFISH PLATTER"},
                    qty:null,
                    descripcion:{es:"Cangrejo de Alaska (250 g), manos de cangrejo moro (200 g), cola de langosta caribeña (150 g), camarones (150 g) y ostiones Costa Este (10 pzas) Con salsa tártara y razurada, salsa tropical con mango, mantequilla y salsa coctelera ", en:"Alaskan King Crab (9 oz), stone crab (7 oz), caribbean lobster tail (4.5 oz), shrimp (5 oz), East Coast oysters (10 pcs) tartar sauce, tropical sauce with mango, butter and cocktail sauce "},
                    precio:"3,700",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/FUENTE-DE-MARISCOS-ROYAL-FREDS.jpg"
                    },
                    {
                    nombre:{es:"MARISCADA", en:"SEAFOOD PLATTER"},
                    qty:null,
                    descripcion:{es:"A la parrilla. Cangrejo Alaska (250 g), cola de langosta caribeña (180 g), pulpo (150 g), filete de pescado (240 g), camarones (200 g) y vegetales. Incluye dos complementos a elegir", en:"Grilled. Alaskan king crab (9 oz), caribbean lobster tail (6 oz), octopus (5 oz), fish fillet (8.5 oz), shrimp (7 oz) and vegetables. Includes two sides to choose from"},
                    precio:"4,100",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/SEADOOD-PLATER-FREDS-1.jpg"
                    },
                    {
                    nombre:{es:"MAR Y TIERRA NEPTUNO", en:"NEPTUNE SURF AND TURF"},
                    qty:null,
                    descripcion:{es:"Cangrejo de Alaska (250 g), pulpo (150 g), camarones (200 g), cola de langosta caribeña (180 g) y vegetales. Incluye dos complementos a elegir", en:"Alaskan king crab (9 oz), octopus (5.5 oz), shrimp (7 oz), lobster tail (6 oz) and vegetables. Includes two sides to choose from"},
                    extra:{es:["Elige tu corte:",[{variedad:"Rib Eye",	precio:"350 g"}, {variedad:"Filete de Res*",	precio:"225 g"}]], en:["CHOOSE YOUR MEAT CUT:", [{variedad:"Rib Eye",	precio:"12 oz"},{variedad:"Mignon Fillet",	precio:"8 oz"}]]},
                    precio:"4,100",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/MAR-Y-TIERRA-freds-1.jpg"
                    },
                  ]
                },
                {
                  nombre: {es:"COMPLEMENTOS",en:"SIDES"},
                  id:"complementos",
                  platos:[
                    {
                    nombre:{es:"Papa horneada", en:"Baked potato"},
                    qty:null,
                    descripcion:null,
                    precio:"180",
                    tipo:"comun",
                    video:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/PAPA_480x854_FREDS.mp4"
                    },
                  
                    {
                    nombre:{es:"Arroz jazmín primavera", en:"Spring rice"},
                    qty:null,
                    descripcion:null,
                    precio:"110",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Arroz-primavera-freds.jpg"
                    },
                    {
                    nombre:{es:"Elote asado", en:"Roasted corn"},
                    qty:null,
                    descripcion:null,
                    precio:"110",
                    tipo:"comun",
                    },
                    {
                      nombre:{es:"Ensalada fresca", en:"Fresh salad"},
                      qty:null,
                      descripcion:null,
                      precio:"$80",
                      tipo:"comun",
                      img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/ensalada-freds.jpg"
                    },
                    {
                    nombre:{es:"Espárragos a la parrilla", en:"Grilled asparagus"},
                    qty:null,
                    descripcion:null,
                    precio:"145",
                    tipo:"comun",
                    },
                    {
                    nombre:{es:"Vegetales salteados", en:"Sauteed vegetables"},
                    qty:null,
                    descripcion:null,
                    precio:"125",
                    tipo:"comun",
                    img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/08/Vegetales-salteados-freds.jpg"
                    },
                    {
                    nombre:{es:"Puré de papa", en:"Mashed potatoes"},
                    qty:null,
                    descripcion:null,
                    precio:"130",
                    tipo:"comun",
                    },
                  ]
                },
],
postres:[{
  nombre: {es:"POSTRES",en:"DESSERTS"},
    id:"postres",
    platos:[
      {
        nombre:{es:"Christmas wish", en:"Christmas wish"},
        qty:null,
        descripcion:{es:"Bizcocho de fruta con canela y nueces remojado en jarabe de brandy. Con helado de vainilla, azúcar glass y una esfera de chocolate amargo rellena con salsa de chocolate artesanal",en:"Fruit cake with cinnamon and nuts dipped in brandy syrup. With vanilla ice cream, powdered sugar, on top a dark chocolate sphere filled with artisan chocolate sauce"},
        precio:"280",
        tipo:"especial",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/12/esfera-navidad.jpg"
      },
      {
        nombre:{es:"PASTEL DE 3 CHOCOLATES", en:"3 CHOCOLATE CAKE"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Doble bizcocho de chocolate, con trufa de chocoavellana, ganache de chocolate y frambuesas frescas ",en:"Double chocolate sponge cake, with chocolate hazelnut true and fresh raspberries"},
        precio:"220",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/PASTEL-DE-TRES-CHOCOLATES-FREDS.jpg"
      },
      {
        nombre:{es:"PIZZETA DE MANZANA", en:"APPLE PIZZETTA"},
        qty:{es:"8 rebanadas", en:"8 slices"},
        descripcion:{es:"Base de crujiente hojaldre con crema pastelera y queso crema, manzana, nuez pecana y salsa de caramelo. Con helado de vainilla al centro",en:"Crispy pastry base with custard and cream cheese, apple, pecan nuts and caramel sauce with vanilla ice cream"},
        precio:"240",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/PIZZETA-FREDS.jpg"
      },
      {
        nombre:{es:"GIANT COCO CHEESECAKE", en:"GIANT COCO CHEESECAKE"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Con base crujiente de nuez, coco y crema dulce. Espolvorado con coco dulce tostado ",en:"With crunchy walnut base, coconut and sweet cream. Topped with sweet toasted coconut"},
        precio:"380",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/coco-cheese-cake-freds.jpg"
      },
      {
        nombre:{es:"TSUNAMISÚ", en:"TSUNAMISÚ"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Suaves capas de bizcocho bañadas en jarabe de café, crema pastelera, queso mascarpone y cocoa ",en:"Soft layers of sponge cake dipped in coffee syrup, pastry cream, mascarpone cheese and cocoa "},
        precio:"240",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/TSUNAMISU-FREDS.jpg"
      },
      {
        nombre:{es:"CREPE CAKE", en:"CREPE CAKE"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Pastel de crepas rellenas con crema azucarada. Snickers® , nuez tostada y salsa de cajeta Flameado con Whisky en mesa ",en:"Filled with sweetened cream. Snikers® , toasted pecans and caramel sauce Flambéed with Whisky tableside"},
        precio:"180",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Crepe-cake-freds.jpg"
      },
      {
        nombre:{es:"MUNCH BROWNIE ", en:"MUNCH BROWNIE"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Brownie de chocolate con pistache sobre galleta Canelita® espolvoreada. Con helado de vainilla, chocolate y salsa de avellana",en:"Chocolate brownie with pistachio on Canelitas® cookie crumb with vanilla ice cream, chocolate and hezelnut sauce "},
        precio:"260",
        tipo:"comun",
        img:"https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/07/Munch-brownie-freds.jpg"
      },
      {
        nombre:{es:"HELADOS", en:"ICE CREAM"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Para escoger: Vainilla, chocolate o fresa",en:"To choose: Vanilla, chocolate or strawberry"},
        precio:"120",
        tipo:"comun",
      },
      {
        nombre:{es:"BELOW ZERO", en:"BELOW ZERO"},
        qty:{es:"3 pzas", en:"3 pcs"},
        descripcion:{es:"Helado cremoso elaborado con nuestra receta especial y nitrógeno líquido. Toppings a elegir Preparado en mesa ",en:"Creamy ice cream made with our special recipe and liquid nitrogen. Toppings to choose Prepared tableside"},
        precio:"450",
        tipo:"comun",
      },
      {
        nombre:{es:"SORBETES", en:"SORBETS"},
        qty:{es:"1 pza", en:"1 pc"},
        descripcion:{es:"Guayaba y mango maracuyá",en:"Mango-passion fruit and guava"},
        precio:"120",
        tipo:"comun",
      },
  ]
}
],
mixologia:[{
nombre: {es:"Mixología", en:"Mixology"},
platos:[
    {
    nombre:{es:"LEMON BUBBLES", en:"LEMON BUBBLES"},
    descripcion:{es:"VERMUT(60 ml) CORDIAL DE LIMÓN, SODA Y BITTERS ", en:"VERMUT (2 oz) LEMON CORDIAL, SODA AND BITTERS"},
    precio:"140",
    tipo:"comun",
    },
    {
    nombre:{es:"COCO CARIBBEAN", en:"COCO CARIBBEAN"},
    descripcion:{es:"BULLEIT BOURBON (15 ml) MALIBU(30 ml) CORDIAL DE MENTA Y LIMÓN CON BITTERS.", en:"BULLEIT BOURBON (.5 oz) MALIBU( 1 oz) MINT AND LEMON CORDIAL WITH BITTERS"},
    precio:"220",
    tipo:"comun",
    },
    {
    nombre:{es:"MAGGIE RITA", en:"MAGGIE RITA"},
    descripcion:{es:"TEQUILA Tradicional plata (40 ml) MEZCAL 400 conejos (15 ml), CORDIAL DE PIÑA, BITTERS Y SALSA TABASCO", en:"TEQUILA TRADICIONAL PLATA (1.5 oz) MEZCAL 400 CONEJOS (.5 oz), PINEAPPLE CORDIAL, BITTERS AND TABASCO SAUCE"},
    precio:"175",
    tipo:"comun",
    },
    {
    nombre:{es:"APEROL SPRITZ", en:"APEROL SPRITZ"},
    descripcion:{es:"APEROL (60 ml) CINZANO PROSECCO SPRITZ (60 ml) y SODA", en:"APEROL (2 oz) CINZANO PROSECCO SPRITZ (2 oz) AND SODA"},
    precio:"210",
    tipo:"comun",
    },
    {
    nombre:{es:"BLOODY FRED´S", en:"BLOODY FRED´S"},
    descripcion:{es:"VODKA (45 ml) LIMÓN, JUGO DE TOMATE CON ALMEJAS, y ESPECIAS.", en:"VODKA (1.5 oz) LEMON, TOMATO JUICE WITH CLAMS AND SPICES"},
    precio:"220",
    tipo:"comun",
    },
    {
    nombre:{es:"POPTAIL", en:"POPTAIL"},
    descripcion:{es:"APPLETON ESTATE SIGNATURE BLEND (45 ml) JUGO DE MARACUYÁ, PIÑA Y LIMÓN CON UNA PALETA HELADA DE FRESA", en:"APPLETON ESTATE SIGNATURE BLEND (1.5 oz) PASSION FRUIT, PINEAPPLE AND LEMON JUICE, WITH AN ICE STRAWBERRY POPSICLE"},
    precio:"175",
    tipo:"comun",
    },
    {
    nombre:{es:"UNCLE CHARLIE", en:"UNCLE CHARLIE"},
    descripcion:{es:"J.W. GOLD LABEL (45ml) JARABE DE CANELA (30ml) Y JUGO DE LIMÓN", en:"J.W. GOLD LABEL (45ml) CINNAMON SYRUP (30ml) AND LIME JUICE"},
    precio:"340",
    tipo:"comun",
    },
  ]
},{
nombre: {es:"Mojito Bar", en:"Mojito Bar"},
sub1:{es:"Ron Bacardí Blanco® 45 ml y top soda a elegir:",en:"Bacardí Blanco® Rum 1.5 oz and top soda to choose:"},
platos:[
    {
    nombre:{es:"CANELA Y COCO", en:"CINNAMON AND COCONUT"},
    precio:"160",
    tipo:"comun",
    },
    {
    nombre:{es:"CHOCOLATE Y MENTA", en:"CHOCOLATE AND MINT"},
    precio:"160",
    tipo:"comun",
    },
    {
    nombre:{es:"FRUTOS ROJOS Y JAMAICA ", en:"RED FRUITS AND HIBISCUS"},
    precio:"160",
    tipo:"comun",
    },
    {
    nombre:{es:"MARACUYÁ Y VAINILLA", en:"RED FRUITS AND HIBISCUS"},
    precio:"160",
    tipo:"comun",
    },
    {
    nombre:{es:"PEPINO Y LYCHEE", en:"CUCUMBER AND LYCHEE"},
    precio:"160",
    tipo:"comun",
    },
    {
    nombre:{es:"PIÑA Y MANGO", en:"PINEAPPLE AND MANGO"},
    precio:"160",
    tipo:"comun",
    },
  ]
},{
  nombre: {es:"COCTELERÍA", en:"COCKTAILS"},
  platos:[
      {
      nombre:{es:"MARGARITA", en:"MARGARITA"},
      descripcion:{es:"Tequila Patrón Silver® 45 ml, Controy® 30 ml y jugo de limón", en:"Patron Silver® Tequila 1.5 oz, Controy® 1 oz and lemon juice"},
      precio:"210",
      tipo:"comun",
    },
    {
      nombre:{es:"MARTINI ESPRESSO", en:"MARTINI ESPRESSO"},
      descripcion:{es:"Vodka Smirnoff® 45 ml, Kahlúa® 15 ml y café espresso", en:"Smirnoff® Vodka 1.5 oz, Kahlua® .5 oz and espresso coffee"},
      precio:"210",
      tipo:"comun",
    },
    {
      nombre:{es:"NEGRONI", en:"NEGRONI"},
      descripcion:{es:"Gin Bombay Sapphire® 30 ml, Campari® 30 ml y vermouth rojo", en:"Bombay Sapphire® Gin 1 oz, Campari® 1 oz and red vermouth"},
      precio:"200",
      tipo:"comun",
    },
    {
      nombre:{es:"OLD FASHIONED", en:"OLD FASHIONED"},
      descripcion:{es:"Bulleit Bourbon® 60 ml y amargo de angostura ", en:"Bulleit Bourbon® 2 oz and angostura bitters"},
      precio:"210",
      tipo:"comun",
    },
    {
      nombre:{es:"VESPER MARTINI", en:"VESPER MARTINI"},
      descripcion:{es:"", en:"Bombay Sapphire® Gin 3 oz, Gray Goose® Vodka 1 oz, Lillet Blanc® .5 oz and lemon"},
      precio:"280",
      tipo:"comun",
      }
    ]
  },
  {
    nombre: {es:"MOCKTAILS", en:"MOCKTAILS"},
    platos:[
        {
        nombre:{es:"GOLDEN PARADISE", en:"GOLDEN PARADISE"},
        descripcion:{es:"Coco, jugo de limón y menta", en:"Coconut, lime juice and mint"},
        precio:"85",
        tipo:"comun",
      },
      {
        nombre:{es:"MINT BREEZE", en:"MINT BREEZE"},
        descripcion:{es:"Limón, jarabe natural, hojas de menta, albahaca y romero", en:"Cucumber juice, lemon, natural syrup, mint leaves, basil and rosemary"},
        precio:"85",
        tipo:"comun",
      },
      {
        nombre:{es:"TROPICAL BULL", en:"TROPICAL BULL"},
        descripcion:{es:"Jugo de piña, limón, jarabe de naranja, clavo, menta y Red Bull Tropical®", en:"Pineapple juice, lime, orange syrup, spice clove, mint and Tropical Red Bull®"},
        precio:"85",
        tipo:"comun",
      }
      ]
  }
]
}

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
