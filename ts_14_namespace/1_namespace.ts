/**
 * Namespace
 *
 * 지금은 사용하지 않습니다.
 */
namespace Home {
    class Idol {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    export const idol = new Idol('아이유', 30);
}
namespace Post {
    class User {
        email: string;
        name: string;
        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }

    // Cannot find name 'Idol'.ts(2304)
    // new Idol();

    Home.idol; // Home.idol

    const admin = new User('dev@example.com', Home.idol.name);
    console.log(admin);
}

namespace Comment {
    const name = 'comment';

    namespace Detail {
        const page = 'detail';
        console.log(name); // comment
        console.log(page); // detail
    }
    console.log(name); // comment
    // console.log(page); // Cannot find name 'page'.ts(2304)
}
