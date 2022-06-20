/* Crear el array de objetos "Pizzas". 🍕
 👉 Debemos crear 6 objetos como mínimo.
 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

 🔥 Crear una iteración del array que imprima en consola:
 a) Las pizzas que tengan un id impar. 
 b) ¿Hay alguna pizza que valga menos de $600?
 c) Los nombres de todos las pizzas.
 d) Los precios de las pizzas.
 e) El nombre de cada pizza con su respectivo precio.

 Cada respuesta debe ser, como siempre, usuario friendly. 
 Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
 Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

 Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

 1Crear el array de objetos "Pizzas".*/


 const pizzas=[
    {
        id:1 ,
        nombre:"muzza",
        ingredientes: ["Mozzarella","provenzal"],
        precio: 550
    },
    {
        id:2 ,
        nombre:"especial",
        ingredientes: ["Mozzarella","jamón","morrón"],
        precio: 800
    },
    {
        id:3 ,
        nombre:"fugazzeta",
        ingredientes : ["Mozzarella","cebolla"],
        precio: 600
    },
    {
        id:4 ,
        nombre:"salchi",
        ingredientes: ["Mozzarella","salchicha"],
        precio: 550
    },
    {
        id:5 ,
        nombre:"pasto",
        ingredientes : ["Mozzarella","cebolla de verdeo","cebolla"],
        precio: 740
    },
    {
        id:6 ,
        nombre:"napo",
        ingredientes: ["Mozzarella","jamón ","morrón","tomate natural "],
        precio: 900
    },
    {
        id:7 ,
        nombre:"pelada ",
        ingredientes: ["salsa","mozzarella"],
        precio: 300
    }
 ]
 const pizzasHoy=[];
for(pizza of pizzas){
    pizzasHoy.push(pizza.nombre)
}


 console.log(`bienvenidos a pizzeria "hdp" los gustos del dia de hoy son:${pizzasHoy}`)
 console.log("-----catalogo-----")
for(pizza of pizzas){
    console.log(`${pizza.nombre}: $${pizza.precio}`)
}
 
 for (pizza of pizzas){
    if(pizza.id%2==1){
        console.log(`las pizza con id impar es  id :${pizza.id} -${pizza.nombre}- `)
    }  
 }
  //esto podria poner los gustos en un array solo, pero para q sea friendly lo decidi hacer asi. si no pondria directamente en un array  en esto caso: ["muzza","salchi","pelada"]
 for (pizza of pizzas){
    if(pizza.precio < 600){
        console.log(`las pizzas que valen menos de 600 pe son ${pizza.nombre}`)
    }
    
}




