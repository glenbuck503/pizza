function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  
}

Pizza.prototype.addPrice = function() {
  let total = 10;
  if (this.size === "medium") {
    total += 4;
  } else if (this.size === "large") {
    total += 6;
  } else {
    total += 0;
  }
  for (let i=0; i < this.toppings.length; i++) {
    total +=1;
  }
  return total;
};


Pizza.prototype.addValue = function ( size) {
  let price = size + parseTop1 + parseTop2 + parseTop3;
  this.price = price;
  
}











$(document).ready(function() {
  $("form#pizzaOrder").submit(function (event)  {
    event.preventDefault();

    let size = $("select#userSize");
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });


    let pizza = new Pizza();
    let price = pizza.addPrice();
    
   
    
    
    
   
   
    $("#output").show();
   
  });
});