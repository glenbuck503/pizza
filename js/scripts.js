function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
}









$(document).ready(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    var userSize = parseFloat($("#userSize").val());
    var userTopping = parseFloat($("#firstTopping").val());
    var userTopping2 = parseFloat($("#secondTopping").val());
    var userTopping3 = parseFloat($("#thirdTopping").val());

    var userPizza = new Pizza(size,toppings1,toppings2,toppings3);
    $("#output").show()
    $("#output").text("dsfsd");
  });
});