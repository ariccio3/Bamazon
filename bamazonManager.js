var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "r1tSQL1t",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    list();
});

function list() {
  console.log();
    inquirer.prompt({
      name: "action",
      type: "list",
      message: "What would you like you to do?",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
      }).then(function(answer) {
        switch (answer.action) {
            case "View Products for Sale":
              displayAll();
              break;

            case "View Low Inventory":
              lowInventory();
              break;

            case "Add to Inventory":
              addInventory();
              break;

              case "Add New Product":
                newProduct();
                break;
        }
    });
}

function displayAll() {
  connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nPrice: $" + res[i].price + "\nQuantity: " + res[i].stock_quantity + "\n----------\n");
    }
    list();
   }) 
}

function lowInventory() {
connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE stock_quantity<5", function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nPrice: $" + res[i].price + "\nQuantity: " + res[i].stock_quantity + "\n----------\n");
      }
      list();
   })
}

function addInventory() {

  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "Please enter the ID of the product you would like to update:",
    validate: function(value) {
      if(!isNaN(value)) {
        return true;
      }
        console.log("Please enter a valid number")
        addInventory();
    }
  },{
    name: "quantity",
    type: "input",
    message: "How many units would you like to add?",
    validate: function(value) {
      if(!isNaN(value)) {
        return true;
      }
        console.log("Please enter a valid number")
        addInventory();
    }

  }]).then(function(answer) {
    var answerID = parseInt(answer.id);
    var answerQuant = parseInt(answer.quantity);
      connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(err, res) {

        for (var i = 0; i < res.length; i++) {
          if (res[i].id === answerID) {
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: res[i].stock_quantity + answerQuant
                },
                {
                  id: answerID
                }
              ],
            function(err, res) {
              console.log(res.affectedRows + " product updated!\n");
              list();
            } 
            );
          }
        }
      })
    })    
}

function newProduct() {

  inquirer.prompt([{
      name: "name",
      type: "input",
      message: "Please enter the product name you would like to add:",
    },{
      name: "dept",
      type: "input",
      message: "Enter Department Name?",
    },{
      name: "price",
      type: "input",
      message: "What is the retail price of this item?",
      validate: function(value) {
        if(!isNaN(value)) {
          return true;
        }
          console.log("Please enter a valid number")
          newProduct();
        }
    },{
      name: "quantity",
      type: "input",
      message: "How many units would you like to add?",
      validate: function(value) {
        if(!isNaN(value)) {
          return true;
        }
          console.log("Please enter a valid number")
          newProduct();
      }

    }]).then(function(answer) {
console.log(answer.name);
      var query = connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.name,
          department_name: answer.dept,
          price: answer.price,
          stock_quantity: answer.quantity
        },
        function(err, res) {
          console.log(res.affectedRows + " product inserted!\n");
        }
      );
        console.log(query.sql);
        list();
  })
}

