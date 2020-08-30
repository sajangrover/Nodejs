const rect = require('./Rectangle')

const solveRect = (l,b) => {
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("Area of rectangle : " + rectangle.area());
            console.log("Parameter of rectangle : " + rectangle.parameter());
        }
    });
    console.log("This statement execute after call react() ");
}

solveRect(6,10)
solveRect(2,3)
solveRect(0,4)
solveRect(10,-1)