test: gather users selected pizza size
expect: let size = \$("select#size").val();

test: gather users selections for toppings and push into an empty array
expect: let toppings = []; $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
});

test: add function to add the total price. Size and toppings
exepct: let price.toEqual(totalPrice)

test: show user total price
expect: (output).text(totalPrice)