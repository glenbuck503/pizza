function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
}









$(document).ready(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    const userSize = parseFloat($("#userSize").val());
    const userTopping = parseFloat($("#firstTopping").val());
    const userTopping2 = parseFloat($("#secondTopping").val());
    const userTopping3 = parseFloat($("#thirdTopping").val());

    let userPizza = new Pizza(size,toppings1,toppings2,toppings3);
    $("#output").show()
    $("#output").text("dsfsd");
  });
});