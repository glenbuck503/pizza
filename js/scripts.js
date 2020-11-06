function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings
}

let price = 3;

Pizza.prototype.addValue = function (size, topping1, topping2, topping3) {
  let price = size + topping1 + topping2 + topping3
  this.price = price;
}

console.log(price)





$(document).ready(function() {
  $("form#pizzaOrder").submit(function (event)  {
    event.preventDefault();

   

    

    let pizza = new Pizza();
    
    const size = parseInt($("select#size").val());
    
    const parseTop1 = parseInt($("select#topping1").val());
    const topping1 = $("#topping2 option:selected").text();

    const parseTop2 = parseInt($("select#topping2").val()); 
    const topping2 = $("#topping2 option:selected").text();
    
    const parseTop3 = parseInt($("select#topping3").val());
    const topping3 = $("#topping3 option:selected").text();

   
    pizza.addValue(size + topping1 + topping2 + topping3);
    // pizza.showPizza(cheesename, saucename, extra1name, extra2name, extra3name)
  });
});