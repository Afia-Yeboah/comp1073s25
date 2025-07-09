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
        this.isDeacf = isDecaf;
    };
    //Next methods
    // add a serveIt method
    serveIt(){
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>
        console.log(cup);
        //Set the src path for the IMG element
        // Determine caffeine status of the coffe
        //Set the size of the cup SVG image based on this.size
        //Generate a description of the coffe and put it into the IMG title attribute
        // Insert the new IMG element into the paragraph
    }
};
/* STEP 2: Instatiate a coffee based on the above constructor function */
let afiaCoffee = new Coffee("medium", false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */

/* STEP 6: Create a new instance of the Latte object */

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
