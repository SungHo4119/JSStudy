/**
 * Object Intersection
 */
type PrimitibeIntersection = string & number; // never

type PersonType = {
    name: string;
    age: number;
};

type CompanyType = {
    company: string;
    companyRegisterationNumber: string;
};

type PersonCompanyType = PersonType & CompanyType;

const jisoo: PersonCompanyType = {
    name: '지수',
    age: 25,
    company: 'YG',
    companyRegisterationNumber: '123-45-67890',
};

type PetType = {
    petName: string;
    petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);
const companyOrPet: CompanyOrPet = {
    //PersonType
    name: '코드팩토리',
    age: 1,

    // CompanyType
    company: 'Code Factory',
    companyRegisterationNumber: '987-65-43210',

    // PetType
    petName: '코드',
    petAge: 2,
};
