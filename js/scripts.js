function Pizza(size) {
  this.size = size;
  this.toppings =[];
  this.price = 0;
}





Pizza.prototype.addValue = function (size, parseTop1, parseTop2, parseTop3) {
  let price = size + parseTop1 + parseTop2 + parseTop3;
  this.price = price;
  
}

Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
}

// Pizza.prototype.costCalculator = function(){
//   if (this.size === "Large") {
//     this.cost += 5; 
//   }
//   if (this.toppings.length > 1) {
//     this.cost += 5; 
//   }
//   return this.cost; 
// }

Pizza.prototype.displayPizza = function(size, topping1, topping2, topping3) {

  let toppingDisplay = size + topping1 + topping2 + topping3;
  $("#final-price").text("The cost of your pizza is " + toppingDisplay);

}




$(document).ready(function() {
  $("form#pizzaOrder").submit(function (event)  {
    event.preventDefault();

   

    

    let pizza = new Pizza();
    
    const size = $("#userSize option:selected").val();
    const parseSize = $("#userSize option:selected").val();
    
    const parseTop1 = parseInt($("select#topping1").val());
    const topping1 = $("#topping1 option:selected").val();

    const parseTop2 = parseInt($("select#topping2").val()); 
    const topping2 = $("#topping2 option:selected").val();
    
    const parseTop3 = parseInt($("select#topping3").val());
    const topping3 = $("#topping3 option:selected").val();

   
   pizza.addValue(size, parseTop1, parseTop2, parseTop3);
    pizza.displayPizza(size, topping1, topping2, topping3);
    $("#customerOrder").show();
   $("#final-price").text()
  });
});