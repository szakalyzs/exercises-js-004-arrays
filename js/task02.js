'use strict';

const mixArr = [45, 'hello', true, 122, 0, 'A', '5', 7.83, false];
const primitive = 0;

const resultObj = (paramArr, paramValue) => {
    return {
        exsist: paramArr.some(item => item === paramValue),
        index: paramArr.findIndex(item => item === paramValue),
        allElementIsANumber: paramArr.every(item => typeof (item) === "number"),
        someElementIsANumber: paramArr.some(item => typeof (item) === "number")
    }
}

console.log(resultObj(mixArr, primitive));
