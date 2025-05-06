/**
 * Extract Type
 */

//  string, boolean, number 타입중에서 string만!
type stringOnly = Extract<string | boolean | number, string>; // string

type FunctionOnly = Extract<string | (() => void), Function>; // Function
