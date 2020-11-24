'use strict';

const content = ['első', 'második', 'harmadik', 'negyedik'];

const tempString = (paramArr) => {
    return '<ul>' + paramArr.map(item => '<li>' + item + '</li>')
        .reduce((prevValue, curValue) => prevValue + curValue) + '</ul>';
}

console.log(tempString(content));