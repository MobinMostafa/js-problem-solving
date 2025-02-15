// product discount problem


// 1 

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


const total = discountProducts(products, 500);
console.log("Total price of all products and quantity is : ", total);

function discountProducts(products, discount){
    let total = 0;
    for(let product of products){
        total += (product.price * product.quantity) - discount;
    }
    return total;
}



// 2

function laryereDiscountTotal( quantity){
     if(quantity <= 100){
        const total = quantity * 100;
        return total;
     }
     else if(quantity <=200){
        const total = quantity * 90;
        return total;
     }
     else{
        const total = quantity * 70;
        return total;
     }
}

const layeredTotal = laryereDiscountTotal(200);

console.log("Total price of layered discount is : ", layeredTotal);

