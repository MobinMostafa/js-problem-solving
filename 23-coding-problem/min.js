let phones = [20000, 18000, 19000, 21000]


function getMin(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone < min){
            min = phone;
        }
    }
    return min;
}

console.log(" min phone price is :",getMin(phones));


// another example

let leptops = [
    {brand: 'hp', price: 20000, color: 'black'},
    {brand: 'dell', price: 18000, color: 'white'},
    {brand: 'acer', price: 19000, color: 'blue'},
    {brand: 'asus', price: 21000, color: 'silver'}
]



function getMinPrice(minimumPrices){
    let min = minimumPrices[0].price;

    for(let minLeptop of minimumPrices){
        if(minLeptop.price < min){
            min = minLeptop;
        }
    }
    return min;

}

const minimumPrices = getMinPrice(leptops);

console.log( "Brand name is :", minimumPrices.brand,"min leptop price is  : ", minimumPrices.price, "color is : ", minimumPrices.color);
