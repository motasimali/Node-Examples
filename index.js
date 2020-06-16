const rect = require('./rectangle');
function solveRectangle (l,b) {
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    rect.test(l,b,(err,rectangle) =>{
        if(err) {
            console.log("ERROR: "+ err.message);
        } else {
            console.log("The area of rectangle of dimentions of l ="+ l +" and b = "+b+ " is "+ rectangle.area());
            console.log("The perimeter of rectangle of dimentions of l ="+ l +" and b = "+b+ " is "+ rectangle.perimeter());

        }
    });
    console.log("This statement is after the call to rect");
}

solveRectangle(0,1);
solveRectangle(19,12);
solveRectangle(0,-1);