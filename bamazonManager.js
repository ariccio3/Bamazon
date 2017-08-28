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
  connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nPrice: $" + res[i].price + "\nPrice: $" + res[i].stock_quantity + "\n----------\n");
    }
   }) 
}

function lowInventory() {

}

function addInventory() {

}

function newProduct() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      product_name: "",
      price: ,
      stock_quantity: 
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );
}