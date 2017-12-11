const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

const prompts = {
    productIDPrompt: {
        type: "input",
        name: "productID",
        message: "Please enter the product ID of the product you want to purchase: "
    },
    numberOfUnitsPrompt: {
        type: "input",
        name: "numberOfUnits",
        message: "Please enter the number of units you want to buy: "
    }
}

const displayProducts = function () {
    console.log('------------------');
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) throw error;

        results.forEach(function (element) {
            console.log('Product ID: ' + element.item_id + '\nName: ' + element.product_name + '\nPrice($): ' + element.price + '\n');

        });

        // connection.end();

        buyProduct();
    });
}

const buyProduct = function () {
    console.log('------------------');
    inquirer.prompt([prompts.productIDPrompt, prompts.numberOfUnitsPrompt])
        .then(function (answers) {
            var query = "SELECT item_id, stock_quantity FROM products WHERE ?";
            connection.query(query, {
                item_id: answers.productID
            }, function (error, results) {
                console.log(results);

                if (answers.numberOfUnits <= results[0].stock_quantity) {
                    console.log('Success!');
                } else if (answers.numberOfUnits > results[0].stock_quantity) {
                    console.log('Insufficient stock!');
                }

            });
        });
}

connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
});