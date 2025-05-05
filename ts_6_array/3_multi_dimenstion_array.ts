/**
 * Multi Dimension Array
 */

/**
 * 1.
 * [1,2,3]
 *
 * 2.
 * [
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]
 *
 * 3.
 * [
 *   [
 *     [10, 11, 12]
 *   ]
 * ]
 */

const num2Darr: number[][] = [[1, 2, 3]];

const str2DArr = [
    // string[][]
    ['1', '2', '3'],
    ['4', '5', '6'],
];

const strAndNumber2DArr: (string | number)[][] = [
    ['1', 2, '3'],
    [4, '5', 6],
];

let strArrOrNumArr: string[][] | number[][] = [
    [4, 5, 6],
    [10, 11, 12],
];
strArrOrNumArr = [
    ['1', '2', '3'],
    ['7', '8', '9'],
];
