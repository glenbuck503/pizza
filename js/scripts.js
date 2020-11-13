function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  
}

Pizza.prototype.totalPrice = function() {
  let total = 0;
  if (this.size === "small") {
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



$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event)  {
    event.preventDefault();

    let size = $("select#userSize").val();
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });


    let userPizza = new Pizza (size, toppings);
    let price = userPizza.totalPrice();
    

    
    
   
    
    
    
   
   
    $("#output").show();
    $("#final").text("your price is  $" + price + " thanks");
    // $("#output").text("Your total will be $" + price +".00");

   
  });
});