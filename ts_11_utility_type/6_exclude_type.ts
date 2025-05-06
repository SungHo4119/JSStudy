/**
 * Exclude Type
 */

//  string, boolean, number 타입중에서 string을 제외한 타입
type NoString = Exclude<string | boolean | number, string>; // number | boolean

type NoFuntion = Exclude<string | (() => void), Function>; // type string
