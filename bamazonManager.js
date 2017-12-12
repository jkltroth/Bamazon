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
    managerOptionsPrompt: {
        type: "list",
        name: "managerOptions",
        message: "Select an option: ",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
    }
};

const selectAnOption = function () {
    console.log('------------------');
    inquirer.prompt(prompts.managerOptionsPrompt)
        .then(function (answers) {
            switch (answers.managerOptions) {
                case "View Products for Sale":
                    viewProducts();
                    break;

                case "View Low Inventory":
                    viewLowInventory();
                    break;

                case "Add to Inventory":
                    //do something
                    break;

                case "Add New Product":
                    //do something
                    break;

                case "Exit":
                    console.log('------------------');
                    console.log("See you next time!");
                    connection.end();
                    break;
            }
        });
};

const viewProducts = function () {
    console.log('------------------');
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) throw error;

        results.forEach(function (element) {
            console.log('Product ID: ' + element.item_id + '\nName: ' + element.product_name + '\nPrice: $' + element.price + '\nQuantity: ' + element.stock_quantity + '\n');
        });

        selectAnOption();
    });
};

const viewLowInventory = function () {
    console.log('------------------');
    console.log("Searching for low inventory products...\n");
    let query = "SELECT * FROM products HAVING stock_quantity <= 5 ORDER BY item_id";
    connection.query(query, function (error, results) {

        if (results.length === 0) {

            console.log("No low inventory products.");
            selectAnOption();

        } else if (results.length > 0) {
            results.forEach(function (element) {
                console.log('Product ID: ' + element.item_id + '\nName: ' + element.product_name + '\nPrice: $' + element.price + '\nQuantity: ' + element.stock_quantity + '\n');
            });

            selectAnOption();
        }

    });
};


const addToInventory = function () {

};

const addNewProduct = function () {

};

const exitProgram = function () {

};

connection.connect(function (err) {
    if (err) throw err;
    selectAnOption();
});