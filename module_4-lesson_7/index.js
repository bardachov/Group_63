/** Питання №1 від Вови */
// "під час виконання автоперевірки попадаю на неправильно поставленний return чому правильно : 
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    
    for (let pizza of pizzaPalace.pizzas) {
      if (pizza === pizzaName){
        return makePizza(pizzaName)
      } 
    }
    
    return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};  

// а не : 
const pizzaPalace2 = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of pizzaPalace.pizzas) {
      
      if (pizza === pizzaName){
        return makePizza(pizzaName)
      } 
      
      return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
    }
  },
};