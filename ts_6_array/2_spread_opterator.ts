/**
 * Spread Operator
 */
const onlyString = ['1', '2', '3'];
const onlyNumber = [1, 2, 3];

const arr = [...onlyString, ...onlyNumber]; // string[] | number[]
const arr2 = [...onlyNumber]; // number[]
