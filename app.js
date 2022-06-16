//add tax to the original price
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
    return Math.floor(Math.random() * time ); // same as as the data above but simpler and more effective.
}
//create array for the cards
const products = [
    {
        id: generateID (),
        price: 15, 
        name: 'Hagen Daz Icecream',
        image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        decription: 'delicious icecream' 
    },
    {
        id: generateID (),
        price: 20, 
        name: 'yellow cheese',
        image: '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        description: 'Aged Gauda 120 Days'
    }
];


//search button
function sortProducts () {
    const sortField = document.querySelector('#sort-field');
    const sortDirection = sortField.value;

}
//fill card with array information every time(foreach) a new array object is added
function getProductsTemplate() {
    const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
    let html = '';

    products.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${IMG_PATH}${prod.image}"
                    class="card-img-top" alt="${prod.description}">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">$
                        ${addTax(prod.price)}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    })

    return html;
}

//takes the return html and dispaly it on the html
function displayProduct() {
    const container = document.getElementById('products-container');
    const productshtml = getProductsTemplate();
    container.innerHTML = productshtml;
}

displayProduct()

