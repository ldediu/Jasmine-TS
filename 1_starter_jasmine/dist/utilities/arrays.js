"use strict";
// Concatenate two arrays
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var concatArr = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1), arr2);
};
// Add numbers in an array
var addArr = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};
// Find the largest number in an array
var lgNum = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
// Remove the 3rd item from an array
var cut3 = function (arr) {
    arr.splice(2, 1);
    return arr;
};
module.exports = {
    concatArr: concatArr,
    addArr: addArr,
    lgNum: lgNum,
    cut3: cut3
};
