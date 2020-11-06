function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings
  let price = 0;
}



Pizza.prototype.addValue = function (size, topping1, topping2, topping3) {
  let price = size + topping1 + topping2 + topping3
  return price;

  this.price;
  // this.price = price;
}

Pizza.prototype.displayPizza = function(size, topping1, topping2, topping3) {
  $("#final-price").append("The cost of your pizza is " + topping1 );

}







$(document).ready(function() {
  $("form#pizzaOrder").submit(function (event)  {
    event.preventDefault();

   

    

    let pizza = new Pizza();
    
    const size = parseInt($("select#size").val());
    
    const parseTop1 = parseInt($("select#topping1").val());
    const topping1 = $("#topping1 option:selected").val();

    const parseTop2 = parseInt($("select#topping2").val()); 
    const topping2 = $("#topping2 option:selected").val();
    
    const parseTop3 = parseInt($("select#topping3").val());
    const topping3 = $("#topping3 option:selected").val();

   $("#customerOrder").show();
   $("#final-price").text();
    pizza.addValue(size + topping1 + topping2 + topping3);
    pizza.displayPizza(size, topping1, topping2,topping3);
  });
});