let heights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function getMax(tallest){
    let max = tallest[0];
     for(let tall of tallest){
     
            if(tall > max){
                max = tall;
            }
     }
     return max;
}

const tallest = getMax(heights);
console.log("max value is : ", tallest);


