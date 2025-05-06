/**
 * class에서 Generic 사용하기
 */
class Pagination<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data; // number[]
pgData.message; // string | undefined
pgData.lastFetchedAt; // Date | undefined

class Pagination2<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pagination2 = new Pagination2([123, 456]);
pagination2.data; // number[] // constructor 부터 유추한 결과로 반영됨.
pagination2.message; // unknown, Pagination2 생성시 generic type을 넣지않았기 때문에 타입을 알 수없어 unknown으로 표기된다.
pagination2.lastFetchedAt; // Date | undefined
