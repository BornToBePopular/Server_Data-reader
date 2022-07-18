const inquirer = require('inquirer');
const axios = require('axios');
const gradient = require('gradient-string');

// Console clear
console.clear();

// Inquirer || Question with time out system :v
inquirer.prompt([
    {
        type: 'input',
        message: "Enter ip/url address : ",
        name: 'target_address'
    }
]).then(a => {
    if (!a.target_address) {
        console.clear();
        console.log(gradient.fruit(`> Invalid ip/url address was provided, please try again ...`))
        setTimeout(() => {
            process.exit();
        }, 5000)
    }
    else {
        console.clear();
        axios({
            method: 'POST',
            url: `http://${a.target_address}/growtopia/server_data.php`
        }).then(response => {
            let load = response.data
            console.log(gradient.pastel(load))
            setTimeout(() => {
                process.exit();
            },10000)
        }).catch(error => {
            console.clear();
            console.log(gradient.fruit(`> Error, can't get any data from ${a.target_address}`));
            console.log(error)
            setTimeout(() => {
                process.exit();
            },5000)
        })
    }
})