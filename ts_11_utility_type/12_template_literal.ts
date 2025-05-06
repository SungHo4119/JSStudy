/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

type CodeFactoryUpper = Uppercase<CodeFactory>; // type CodeFactoryUpper = "CODE FACTORY"
type CodeFactoryLower = Lowercase<CodeFactory>; // type CodeFactoryLower = "code factory"

// 첫글자만 대문자로
type CodeFactoryCapitalize = Capitalize<CodeFactoryLower>; // "Code factory"
// 첫글자만 소문자로
type CodeFactoryUncapitalize = Uncapitalize<CodeFactoryUpper>; // "cODE FACTORY"
