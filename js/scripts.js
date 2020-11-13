function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  
}

Pizza.prototype.totalCost = function() {
  let total = 0;
  if (this.size === "small") {
    total += 12;
  } else if (this.size === "medium") {
    total += 14;
  } else if (this.size === "large") {
    total += 16;
  }
   else {
    total += 0;
  }
  for (let i=0; i < this.toppings.length; i++) {
    total +=1;
  }
  return total;
};





$(document).ready(function() {
  $("form#pizzaOrder").submit(function (event)  {
    event.preventDefault();

    let size = $("select#userSize").val();
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });


    let pizza = new Pizza();
    let price = pizza.totalCost();

    
    
   
    
    
    
   
   
    $("#output").show();
    $("#totalCost").html("Your total will be $" + price +".00");

   
  });
});