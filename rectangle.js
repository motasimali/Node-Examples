// exports used when exporting multiple or named function
// module.exports when exporting a unamed function or only one function from the file.
// here test is the name of function so we are using exports.
exports.test = (x,y,callback) =>{
    if(x<=0 || y<=0) {
        setTimeout(()=>
            callback(new Error( "Invalid Dimensions"), null),
            2000);
    } else {
        setTimeout(() => 
            callback(null, {
                perimeter : () => (2*(x+y)),
                area : () => (x*y)
            }),
            2000);
    }
}