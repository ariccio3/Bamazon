var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "r1tSQL1t",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayAll();
});

function displayAll() {
  connection.query("SELECT id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nPrice: " + res[i].price + "\n----------\n");
    }
    // idSelect();
  
// }

// function idSelect() {

  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "Please enter the ID of the product you would like to buy",
    validate: function(value) {
      if(!isNaN(value)) {
        return true;
        
      }
        console.log("Please enter a valid number")
        idSelect();
    }
  },{
    name: "quantity",
    type: "input",
    message: "Excellent choice! How many would you like to buy?",
    validate: function(value) {
      if(!isNaN(value)) {
        return true;
        
      }
        console.log("Please enter a valid number")
        idSelect();
    }

  }]).then(function(answer) {
    var answerID = parseInt(answer.id);
    var answerQuant = parseInt(answer.quantity);

      for (var i = 0; i < res.length; i++) {
        if (res[i].id === answerID) {
          console.log("Congrats on buying a " + res[i].product_name);

          connection.query(
                      "UPDATE products SET ? WHERE ?",
                      [
                        {
                          stock_quantity: res[i].stock_quantity - answerQuant
                        },
                        {
                          id: answerID
                        }
                      ],
                      function(error) {
                        if (error) throw err;
                          for (var i = 0; i < res.length; i++) {
                            console.log("Your order has been filled. \nYour Total Is: $" + res[i].price + "\n----------\n");
                          }
                      }
                    );



            // connection.query("UPDATE products SET stock_quantity=res[i].stock_quantity - answer.quantity WHERE id=answer.id", function(err, res) {
            //   if (err) throw err;

            //   for (var i = 0; i < res.length; i++) {
            //     console.log("Your order has been filled. \nYour Total Is: $" + res[i].price + "\n----------\n");
            //   }
            // })
        } else {
          console.log("That's more than we have in stock. Try again");
        }
      }
      connection.end();
    }) //.then close 
  })   // connection.query close  
} // displayAll function close




// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.