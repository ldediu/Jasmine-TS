import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('Should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it('Should be a sum greater than 10', () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
});

it('Should multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3, 5)).toBe(15);
});

it('Should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});

it('Should concatinate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it('Should not contain the 3rd index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});