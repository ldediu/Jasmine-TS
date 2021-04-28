"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
it('Should capitalize a string', function () {
    expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
});
it('Should be a sum greater than 10', function () {
    expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
});
it('Should multiply 3 by 5 and be 15', function () {
    expect(numbers_1.default.multiply(3, 5)).toBe(15);
});
it('Should add numbers in array and be truthy', function () {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it('Should concatinate 2 arrays to not equal just 1', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('Should not contain the 3rd index', function () {
    expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
});
