// // //busines logic
// function Ticket(run, time, age) {
//   // this.movie = movie;
//   this.run = run;
//   this.time = time;
//   this.age = age;
//   this.price="";
// }
//
// Ticket.prototype.ticketPrice = function(){
//   //i think that ticketprice should calculate a price and then set this's price to the result
//   //of those calculations and then return it.
//   return this.run - this.time - this.age;
// }
//
// //user interface logic
// $(document).ready(function() {
//   $("form#movies").submit(function(event){
//       event.preventDefault();
//     // var run = parseInt($("#run").val());//change this to movie title
//     var run = parseInt($("#run").val());
//     var time = parseInt($("#time").val());
//     var age = parseInt($("#age").val());
//     var newTicket = new Ticket(run, time, age);
//     $("#show-price").show();
//     $("#price").text(newTicket.ticketPrice());
//   });
//
// });



// business logics
function Pizza(customer) {
  this.customer = customer;
  this.price = [];
}

function Price(size, topping) {
  this.size = size;
  this.topping = price;
}

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

Price.prototype.totalPrice = function() {
  return this.size + ", " + this.topping;
}

// / //user interface logic
$(document).ready(function() {
  $("form#movies").submit(function(event){
      event.preventDefault();
    // var run = parseInt($("#run").val());//change this to movie title
    var run = parseInt($("#run").val());
    var time = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(run, time, age);
    $("#show-price").show();
    $("#price").text(newTicket.ticketPrice());
  });

});


// user interface logic
// $(document).ready(function() {
//
//   $("#add-address").click(function() {
//     $("#new-addresses").append('<div class="new-address">' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-street">Street</label>' +
//                                    '<input type="text" class="form-control new-street">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-city">City</label>' +
//                                    '<input type="text" class="form-control new-city">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-state">State</label>' +
//                                    '<input type="text" class="form-control new-state">' +
//                                  '</div>' +
//                                '</div>');
//   });
//
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();
//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
//       newContact.addresses.push(newAddress)
//     });
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
//
//   });
// });
