// get all products price total


let products = [
    {
        name: 'shirt',
        price: 500,
        quantity: 2
    },
    {
        name: 'pant',
        price: 1000,
        quantity: 2
    },
    {
        name: 'shoe',
        price: 1500,
        quantity: 2
    },
    {
        name: 'watch',
        price: 2000,
        quantity: 3
    },
    {
        name: 'glass',
        price: 2500,
        quantity: 3
    }
]


function getTotalPrice(allProducts){
    let total = 0;
    for(let product of allProducts){
        total += product.price;
    }
    return total;
}



const allProducts = getTotalPrice(products);


console.log("Total price of all products is : ", allProducts);



function getAllProductsTotal(products){
    let total = 0;
    for(let product of products){
        total += product.price * product.quantity;
    }
    return total;
}   

const total = getAllProductsTotal(products);
console.log("Total price of all products and quantity is : ", total);
