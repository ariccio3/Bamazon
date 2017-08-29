# Bamazon Challenge #1: Customer View

This is a "Amazon-like" app that has a product database/table that stores the product name, dept, price and quantity. In node, simply enter the product ID you are interested and the number of units you'd like to buy. The app will update the quntity in the data base to count for the units you purchased.

**Getting Started**

Just load the mysql and inquirer node packages to start and follow the step-by-step instructions below.

**Prerequisites**

Packages needed

mysql
inquirer

**Step-by-Step**

**Step 1:** In your command line type in node and the javascript filename: bamazonCustomer.js like this and hit 'enter':

![capture1](https://user-images.githubusercontent.com/29411395/29797293-23083b3c-8c0b-11e7-8004-8ec96fef9a21.JPG)

**Step 2:** On the screen you will see a list of the available products along with their price and ID. Simply type in the ID number of the product you'd like to buy after the prompt on the bottom and hit 'enter':

![capture2](https://user-images.githubusercontent.com/29411395/29797298-230f12f4-8c0b-11e7-8f8a-bd959f2018a9.JPG)

**Step 3:** You will then be prompted for the number of units you would like to buy. Enter in the amount you'd like and hit 'enter':

![capture3](https://user-images.githubusercontent.com/29411395/29797297-230eff1c-8c0b-11e7-9014-a6f260ca4449.JPG)

**Step 4:** If there is enough of your item in stock the app will show you your total:

![capture4](https://user-images.githubusercontent.com/29411395/29797295-230e3d2a-8c0b-11e7-83e3-285276ac506a.JPG)

**Step 5:** If there is not enough in stock you will be informed and urged to try again:

![capture5](https://user-images.githubusercontent.com/29411395/29797296-230f09b2-8c0b-11e7-98ce-ac2a4f4fb811.JPG)

If you purchase is successfull, the database will update the inventory to reflect your oder:

BEFORE:

![capture6](https://user-images.githubusercontent.com/29411395/29797294-230b4b9c-8c0b-11e7-88be-4fe0ddde2d49.JPG)

AFTER:

![capture7](https://user-images.githubusercontent.com/29411395/29797299-2322d4ba-8c0b-11e7-835c-078104751e9c.JPG)

# Challenge #2: Manager View**

In the Manager view you can view the products for sale, low inventory, increase the inventory and add products to the data base.

**Step-by-Step**

**Step 1: View all products for sale** In your command line type in node and the javascript filename: bamazonManager.js like this and click 'enter'. Then choose "View Products for Sale" in the list and click 'enter':

![all products](https://user-images.githubusercontent.com/29411395/29810606-4ff137c6-8c55-11e7-82fa-6e0c1a6f5cd6.JPG)

**Step 2: View low inventory** Choose "View Low Inventory" in the list and click 'enter':

![low inventory](https://user-images.githubusercontent.com/29411395/29810607-4ff43d86-8c55-11e7-895f-f2262e9bc3a5.JPG)

**Step 3: Add to Inventory** Choose "Add to Inventory" in the list and click 'enter'. You will be prompted for the id and quantity you want to update:

![add to inventory](https://user-images.githubusercontent.com/29411395/29810608-4ff47364-8c55-11e7-90e8-a5cccda87201.JPG)

**Step 4: Add New Product** Choose "Add New Product" in the list and click 'enter'. You will be prompted for the product name, department name, price and quantity of the product you'd like to add to the data base:

![add product](https://user-images.githubusercontent.com/29411395/29810605-4feb8bb4-8c55-11e7-86bf-4ba32a2d758e.JPG)

**Step 5:** The data base is updated with the product you added!

![product added](https://user-images.githubusercontent.com/29411395/29810604-4feb5ce8-8c55-11e7-9ff2-dcc6ee41f747.JPG)

**Built With**

mysql - The database used
Node - Dependency Management
Javascript - Used to generate RSS Feeds

**Authors**

Anthony Riccio

**License**

This project is licensed under the MIT License - see the LICENSE.md file for details
