/**
 * return Type
 */

type ReturnTypeSample = ReturnType<() => number>; // type ReturnTypeSample = number

type functionSing = (x: number, y: number) => number;

type ReturnTypeSample2 = ReturnType<functionSing>; // type ReturnTypeSample2 = number
