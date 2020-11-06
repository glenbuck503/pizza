function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings


}

let price = 2;






$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    $( "h2").empty();

    let pizza = new Pizza();
    const size = parseInt($("select#size").val());
    const sauce = parseInt($("select#sauce").val());
    const saucename = $("#sauce option:selected").text();

    const cheese = parseInt($("select#cheese").val());
    const cheesename = $("#cheese option:selected").text();

    const extra1 = parseInt($("select#extras1").val());
    const extra1name = $("#extras1 option:selected").text();

    const extra2 = parseInt($("select#extras2").val()); 
    const extra2name = $("#extras2 option:selected").text();

    const extra3 = parseInt($("select#extras3").val());
    const extra3name = $("#extras3 option:selected").text();

    pizza.size(size);
    pizza.addValue(size, sauce, cheese, extra1, extra2, extra3);
    pizza.showPizza(cheesename, saucename, extra1name, extra2name, extra3name)
  });
});