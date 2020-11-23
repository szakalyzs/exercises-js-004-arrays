'use strict';

const numArr = [50, 780, 1250, 15, 370, 100];

const bruttoSum = numArr
    .map(item => item * 1.27)
    .reduce((prevValue, currValue) => prevValue + currValue);

console.log(bruttoSum);