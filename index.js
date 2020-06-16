var rect = require('./rectangle');
function solveRectangle (l,b) {
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    if(l<=0 || b<=0) {
        console.log("Invalid Dimensions");
    } else {
        console.log("Area of rectangle is "+ rect.area(l,b));
        console.log("The Perimeter of the rectangle is "+ rect.perimeter(l,b));
    }
}

solveRectangle(0,1);
solveRectangle(19,12);
solveRectangle(0,-1);