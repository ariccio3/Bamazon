# Bamazon

This is a "Amazon-like" app that has a product database/table that stores the product name, dept, price and quantity. In node, simply enter the product ID you are interested and the number of units you'd like to buy. The app will update the quntity in the data base to count for the units you purchased.

Getting Started

Just load the mysql and inquirer node packages to start and follow the step-by-step instructions below.

Prerequisites

Packages needed

mysql
inquirer

Step-by-Step 

Step 1: In your command line type in node and the javascript filename: bamazonCustomer.js like this and hit 'enter':


Step 2: On the screen you will see a list of the available products along with their price and ID. Simply type in the ID number of the product you'd like to buy after the prompt on the bottom and hit 'enter':


Step 3: You will then be prompted for the number of units you would like to buy. Enter in the amount you'd like and hit 'enter':


Step 4: If there is enough of your item in stock the app will show you your total:


Step 5: If there is not enough in stock you will be informed and urged to try again:


If you purchase is successfull, the database will update the inventory to reflect your oder:


Built With

mysql - The database used
Node - Dependency Management
Javascript - Used to generate RSS Feeds

Authors

Anthony Riccio

License

This project is licensed under the MIT License - see the LICENSE.md file for details
