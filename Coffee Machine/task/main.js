// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let paperCups = 9;
let money = 550;
let exit = false;

coffeeProgram()


/////////////////////////
// Functions //////////
/////////////////////
function coffeeProgram () {

   // ingredients(input("Write how many cups of coffee you wil need:\n"));
    while(true) {
        //inventory();

        let inp = input("Write action (buy, fill, take, remaining, exit): \n");

        switch(inp) {
            case "buy":
                makeCoffee();
                break;
            case "fill":
                fillInventory();
                break;
            case "take":
                console.log("I gave you $" + money + "\n");
                money = 0;
                break;
            case "remaining":
                inventory()
                break;
            case "exit":
                exit = true;
                break;
            default:
                console.log("wrong option");
            // code block
        }
        if (exit === true) {
            break;
        }
    }
}

function ingredients (cups) {
    console.log("For "+ cups +" cups of coffee you will need:")
    console.log(water + " ml of water");
    console.log(cups * 50 + " ml of milk");
    console.log(cups * 15 + " g of coffee beans \n");
}
function fillInventory() {
    let addWater = parseInt(input("Write how many ml of water you want to add: \n"));
    water = water + addWater;
    let addMilk = parseInt(input("Write how many ml of milk you want to add:\n"));
    milk = milk + addMilk;
    let addBeans =  parseInt(input("Write how many grams of coffee beans you want to add:\n"));
    beans = beans + addBeans;
    let addCups =  parseInt(input("Write how many disposable cups you want to add:\n"));
    paperCups = paperCups + addCups;
}

function inventory() {
    console.log( "The coffee machine has:\n"+
    water +  " ml of water\n" +
    milk + " ml of milk \n" +
    beans + " g of coffee beans\n" +
    paperCups + " disposable cups\n" +
    "$"+ money + " of money\n");

}
function makeCoffee () {
    let madeCups = 0;
    let coffeePrice = 0;

    let kindOfCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");


    let reqWater = 0;
    let reqMilk = 0;
    let reqBeans = 0;


    switch(kindOfCoffee) {
        case 1: //espresso
        case "1":
            coffeePrice = 4;
            reqWater = 250; reqMilk = 0; reqBeans = 16;
            //inventory();
            break;
        case  2:// latte
        case "2":
            coffeePrice = 7;
            reqWater = 350; reqMilk = 75; reqBeans = 20;
            //inventory();
            break;
        case 3: // cappucion
        case "3":
            coffeePrice = 6;
            reqWater = 200; reqMilk = 100; reqBeans = 12;
           // inventory();
            break;
        case "back": // return / back
        case "return":
            exit = true;
            break;
        default:
           console.log("wrong option");
            break;
        // code block
    }
    if (exit == false) {
        //Find out how many cups of coffee are ordered
        //let cups = parseInt(input("Write how many cups of coffee you will need:\n"));
        let cups = 1

        if (water >= reqWater && milk >= reqMilk && beans >= reqBeans) {
            madeCups = cupCapacity()//end of loop
            let extraCups = (madeCups - cups) - 1;

            if (extraCups === 0) {
                //console.log("Yes, I can make that amount of coffee\n");
                console.log("I have enough resources, making you a coffee!")
            } else {
                //console.log("Yes, I can make that amount of coffee (and even " + extraCups + " more)\n")
                console.log("I have enough resources, making you a coffee!")
            }

        } else if (water < reqWater) {
            console.log("Sorry, not enough water!\n")
        } else {
            madeCups = cupCapacity()//end of loop
            console.log("No, I can make only " + madeCups + " cups of coffee\n")
        }

        //FUNCTIONS makeCoffee
        function cupCapacity() {
            while (true) {
                if (water >= reqWater && milk >= reqMilk && beans >= reqBeans && paperCups > 0 && cups > 0) {
                    water = water - reqWater;
                    milk = milk - reqMilk;
                    beans = beans - reqBeans;
                    madeCups++;
                    paperCups--;
                    cups--;
                    money = money + coffeePrice
                    console.log(water + " " + milk + " " + beans);
                } else {
                    return madeCups;
                    break;
                }
            }
        }
    } else {
        exit = false;
    }
}

