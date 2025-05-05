/**
 * Nested Objeect
 */
type NestedPerson = {
    identity: {
        name: string;
        age: number;
    };
    nationality: string;
};

const codefactory: NestedPerson = {
    identity: {
        // name을 지울 경우
        //       'name' 속성이 '{ age: number; }' 형식에 없지만 '{ name: string; age: number; }' 형식에서 필수입니다.ts(2741)
        // 3_nested_object.ts(6, 9): 여기서는 'name'이(가) 선언됩니다.
        // 3_nested_object.ts(5, 5): 필요한 형식은 여기에서 'NestedPerson' 형식에 선언된 'identity' 속성에서 가져옵니다.
        name: 'John Doe',
        age: 25,
    },
    nationality: 'American',
};

type TPerson = {
    identity: TPersonIdentity;
    nationality: string;
};
type TPersonIdentity = {
    name: string;
    age: number;
};

const iu: TPerson = {
    identity: {
        //       'name' 속성이 '{ age: number; }' 형식에 없지만 'TPersonIdentity' 형식에서 필수입니다.ts(2741)
        // 3_nested_object.ts(29, 5): 여기서는 'name'이(가) 선언됩니다.
        // 3_nested_object.ts(25, 5): 필요한 형식은 여기에서 'TPerson' 형식에 선언된 'identity' 속성에서 가져옵니다.
        // name을 지울 경우
        name: 'iu',
        age: 30,
    },
    nationality: 'Korean',
};

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity {
    name: string;
    age: number;
}
const yuJin: IPerson = {
    identity: {
        //     'name' 속성이 '{ age: number; }' 형식에 없지만 'IPersonIdentity' 형식에서 필수입니다.ts(2741)
        // 3_nested_object.ts(52, 3): 여기서는 'name'이(가) 선언됩니다.
        // 3_nested_object.ts(46, 3): 필요한 형식은 여기에서 'IPerson' 형식에 선언된 'identity' 속성에서 가져옵니다.
        name: 'yuJin',
        age: 30,
    },
    nationality: 'Korean',
};
