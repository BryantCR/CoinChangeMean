function coinChange(amount){
    let penny = 1;
    let nickel = 5;
    let dime = 10;
    let quarter = 25;
    let dollar = 100;
    /* R */
    let pennyA = 0;
    let nickelA = 0;
    let dimeA = 0;
    let quarterA = 0;
    let dollarA = 0;

    let Change = {}

    function dollars(){
        if(dollar <= amount ){
            amount = amount - dollar;
            dollarA++;
            return dollars();
        }
        else{
            return dollarA;
        }
    }
    
    function quarters(){
        if(quarter <= amount ){
            amount = amount - quarter;
            quarterA++;
            return quarters();
        }
        else{
            return quarterA;
        }
    }

    function dimes(){
        if(dime <= amount ){
            amount = amount - dime;
            dimeA++;
            return dimes();
        }
        else{
            return dimeA;
        }
    }

    function nickels(){
        if(nickel <= amount ){
            amount = amount - nickel;
            nickelA++;
            return nickels();
        }
        else{
            return nickelA;
        }
    }

    function pennys(){
        if(penny <= amount ){
            amount = amount - penny;
            pennyA++;
            return pennys();
        }
        else{
            return pennyA;
        }
    }
    
    if(dollars() != 0){
        console.log("Dollars: "+ dollarA);
        Change.dollars = dollars();
    }
    if(quarters() != 0){
        console.log("Quarters: "+ quarterA);
        Change.quarters = quarters();
    }
    if(dimes() != 0){
        console.log("Dimes: "+ dimeA);
        Change.dimes = dimes();
    }
    if(nickels() != 0){
        console.log("Nickels: "+ nickelA);
        Change.nickels = nickels();
    }
    if(pennys() != 0){
        console.log("Pennies: "+ pennyA);
        Change.pennys = pennys();
    }

    return Change;

}

let amount = 359;
coinChange(amount)
console.log(coinChange(amount));

/*
Alfredo Code

let student = {
    firstName : "Alex",
    lastName : "Miller"
}

student.age = 25;
student['course'] = "MEAN";
let key = 'instructor';
let instructorName = "Alfredo";

student[key] = instructorName;

console.log( student );

function fizzBuzz( num ){
    console.log( typeof( num ) );
    if( typeof( num ) === 'string' ){
        console.log( "Parameter must be a positive number" );
    }
    if( num >= 1 ){
        console.log( "The number is positive", num );
    }
    else{
        console.log( "Parameter must be a positive number" );
        console.log( Math.abs( num ) );
    }
}



*/