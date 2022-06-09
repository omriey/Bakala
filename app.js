
function addTax(price) {
    if(!price || price <= 0 || typeof(price) === 'string' ){ // "!" is to run an if statment to see if a number or string is considered  null, undeined, zero or false. then any negative number will not be accepted. lastly === will check that its a string.
        throw error ('Nothing is for free! please supply a price');//throw is an object so it gives alot of imformation like red background, stops the code and present the error location
    } 
    const vat = 1.17; 
    const total = (price * vat).toFixed(2);
    return total;
};

function generateID (){
/*     const rand = Math.random(); //0.266584348
    console.log(`rand: $(rand`)
    const num = rand * 10000; //265558.4585
    console.log(`rand: $(num`)
    const floor = Math.floor(num); //265483241 - remove left over after decimal point */
    /* return Math.floor(Math.random() * 10000 );  */

    const time = new Date().getTime();

    return Math.floor(Math.random() * time ); // next level
    

}