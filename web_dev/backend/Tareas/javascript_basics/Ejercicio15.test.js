// Test case 1: Descending order
let input1 = [5, 2, 8, 1, 9];
let expected1 = [9, 8, 5, 2, 1];
let output1 = descNums(input1);
console.log(output1); // Expected output: [9, 8, 5, 2, 1]
console.log(output1 === expected1); // Expected output: true

// Test case 2: Descending order with negative numbers
let input2 = [-3, -1, -5, -2, -4];
let expected2 = [-1, -2, -3, -4, -5];
let output2 = descNums(input2);
console.log(output2); // Expected output: [-1, -2, -3, -4, -5]
console.log(output2 === expected2); // Expected output: true

// Test case 3: Descending order with duplicate numbers
let input3 = [7, 3, 5, 3, 2];
let expected3 = [7, 5, 3, 3, 2];
let output3 = descNums(input3);
console.log(output3); // Expected output: [7, 5, 3, 3, 2]
console.log(output3 === expected3); // Expected output: true

// Test case 4: Descending order with empty array
let input4 = [];
let expected4 = [];
let output4 = descNums(input4);
console.log(output4); // Expected output: []
console.log(output4 === expected4); // Expected output: true
