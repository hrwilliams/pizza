// // //busines logic


//business logics
// function Pizza(customer) {
//   this.customer = customer;
//   this.price = [];
// }

// Pizza.prototype.order = function() {
//   return this.customer + " " + this.price;

function Price(size, goatCheese, spinach, roastedPotatoes, redOnion, pinapple, basil, pear, mushrooms, sunDriedTomatoes) {
  this.size = size;
  this.goatCheese = goatCheese;
  this.spinach = spinach;
  this.roastedPotatoes = roastedPotatoes;
  this.redOnion = redOnion;
  this.pinapple = pinapple;
  this.basil = basil;
  this.pear = pear;
  this.mushrooms = mushrooms;
  this.sunDriedTomatoes = sunDriedTomatoes;
}

Price.prototype.totalPrice = function() {
  return this.size + this.goatCheese + this.spinach + this.roastedPotatoes + this.redOnion + this.pinapple + this.basil + this.pear + this.mushrooms + this.sunDriedTomatoes;
}

// / //user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event){
      event.preventDefault();
    // var customer = $("#customer").val();
    var size = parseInt($("#size").val());
    // var  = parseInt($("#topping").val());
    // $("#show-toppings").show();

    var goatCheese = parseInt($("#goat-cheese").val());
    var spinach = parseInt($("#spinach").val());
    var roastedPotatoes = parseInt($("#roasted-potatoes").val());
    var redOnion = parseInt($("#red-onion").val());
    var pinapple = parseInt($("#pinapple").val());
    var basil = parseInt($("#basil").val());
    var pear = parseInt($("#pear").val());
    var mushrooms = parseInt($("#mushrooms").val());
    var sunDriedTomatoes = parseInt($("#sun-dried-tomatoes").val());
    var newPrice = new Price(size, goatCheese, spinach, roastedPotatoes, redOnion, pinapple, basil, pear, mushrooms, sunDriedTomatoes);
    // var newPizza = new Pizza(customer)
    $("#show-price").show();
    $("#price").text(newPrice.totalPrice());
  });

});
