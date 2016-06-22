//business logics
// function Pizza(customer) {
//   this.customer = customer;
//   this.price = "";
// }

function Price(size, topping) {
  this.size = size;
  this.topping = topping;
}

// Pizza.prototype.order = function() {
//   return this.customer + " " + this.price;
//

Price.prototype.totalPrice = function() {
  return this.size + this.topping;
}

// / //user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event){
      event.preventDefault();
    // var customer = $("#customer").val();
    var size = parseInt($("#size").val());
    var topping = parseInt($("#topping").val());
    var newPrice = new Price(size, topping);
    // var newPizza = new Pizza(customer)
    $("#show-price").show();
    $("#price").text(newPrice.totalPrice());
  });

});

// //business logic
// // function Pizza(customer) {
// //   this.customer = customer;
// //   this.price = [];
// // }
//
// // Pizza.prototype.order = function() {
// //   return this.customer + " " + this.price;
//
// function Price(size, goatCheese, spinach, roastedPotatoes, redOnion, pinapple, basil, pear, mushrooms, sunDriedTomatoes) {
//   this.size = size;
//   this.goatCheese = goatCheese;
//   this.spinach = spinach;
//   this.roastedPotatoes = roastedPotatoes;
//   this.redOnion = redOnion;
//   this.pinapple = pinapple;
//   this.basil = basil;
//   this.pear = pear;
//   this.mushrooms = mushrooms;
//   this.sunDriedTomatoes = sunDriedTomatoes;
// }
//
// // var orderSize = 0;
// // var orderTopping =0;
//
// Price.prototype.totalPrice = function() {
//   return this.size + this.goatCheese + this.spinach + this.roastedPotatoes + this.redOnion + this.pinapple + this.basil + this.pear + this.mushrooms + this.sunDriedTomatoes;
// }
//
// // / //user interface logic
// $(document).ready(function() {
//   $("form#pizza").submit(function(event){
//       event.preventDefault();
//     // var customer = $("#customer").val();
//     var size = parseInt($("#size").val());
//     // var  = parseInt($("#topping").val());
//     // $("#show-toppings").show();
//
//     var goatCheese = parseInt($("#goat-cheese:checked").val());
//     var spinach = parseInt($("#spinach:checked").val());
//     var roastedPotatoes = parseInt($("#roasted-potatoes:checked").val());
//     var redOnion = parseInt($("#red-onion:checked").val());
//     var pinapple = parseInt($("#pinapple:checked").val());
//     var basil = parseInt($("#basil:checked").val());
//     var pear = parseInt($("#pear:checked").val());
//     var mushrooms = parseInt($("#mushrooms:checked").val());
//     var sunDriedTomatoes = parseInt($("#sun-dried-tomatoes:checked").val());
//     var newPrice = new Price(size, goatCheese, spinach, roastedPotatoes, redOnion, pinapple, basil, pear, mushrooms, sunDriedTomatoes);
//     // var newPizza = new Pizza(customer)
//     $("#show-price").show();
//     $("#price").text(newPrice.totalPrice());
//   });
// });
