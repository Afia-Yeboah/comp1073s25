const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    // first I need when creating a class is 
    // variable/attributes
    size;
    isDecaf;
    //Next is Constructor and pass the values we need
    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    };
    //Next methods
    // add a serveIt method
    serveIt(){
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>
        //console.log(cup);
        //Set the src path for the IMG element
        // <img src="images/coffee.cup.svg"> setAttribute takes two attributes, Value and the info
        cup.setAttribute("src", "images/coffee.cup.svg");
        console.log(cup);
        // Determine caffeine status of the coffee
        // use if statements to check the different states of the item
        if (this.isDecaf) {
            // <img src="images/coffee-cup-green.svg">
            cup.setAttribute("src", "images/coffee-cup-green.svg")
        } else {
            // <img src="images/coffee-cup-purple.svg">
            cup.setAttribute ("src", "images/coffee-cup-purple.svg")
        }
        //Set the size of the cup SVG image based on this.size
        switch (this.size) {
            case "small":
                // <img src="images/coffee-cup-green.svg height = 100>
                cup.setAttribute("height", "100");
                break;
            case "medium":
                // <img src="images/coffee-cup-green.svg
                cup.setAttribute("height", "150");
                break;
            case "large":
                //<img src="images/coffee-cup-green.svg
                cup.setAttribute("height", "200");
                break;
            default:
                cup.setAttribute("height", "150");

        }
        //Generate a description of the coffe and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} sized coffe.`);
        // Insert the new IMG element into the paragraph
        // Using Append to adds the Value to my Output in the Paragraph Tag
        output.appendChild(cup);
    }
};
/* STEP 2: Instatiate a coffee based on the above constructor function */
let afiaCoffee = new Coffee("medium", false);
let batiyahCoffee = new Coffee("large", true);
let zaneCoffee = new Coffee("small", false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
afiaCoffee.serveIt();
batiyahCoffee.serveIt();
zaneCoffee.serveIt();

/* STEP 5: Define a subclass of the Coffee class NB: L in latte should always be Caps*/
class Latte extends Coffee{
    // Create Variable because it doesn't have in the Parent Class aside that, I don't need to recreate what I had done above
    milkType;
    constructor(size, isDecaf, milkType){
        super(size, isDecaf);
        this.milkType = milkType;
    }
    latteDesc(){
        alert (`A ${this.size} sized Latte with ${this.milkType} milk.`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let afiaLatte = new Latte("medium", false, "2%");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
