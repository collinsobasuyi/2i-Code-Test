// Break and conditions
let i = 1;
while (i <= 11) {
    if (i === 11) break;
    
    console.log(i);
    i++;
}

// // For and conditions
for(let x = 1;x <= 10;x++){
    console.log(x);
}

// //sort
let num = [1, 2, 2, 3, 4, 5, 6, 7, 7, 1, 2, 9, 10];
let y = num.sort((a, b) => b - a)
let uniqueNum = [...new Set(y)];

console.log(uniqueNum);