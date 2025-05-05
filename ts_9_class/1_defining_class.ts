/**
 * Class 선언하기
 */
class SampleClass {}

class Game {
    name: string;
    country: string;
    download: number;

    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce(): string {
        return `${this.name}는 ${this.country}에서 ${this.download}회 다운로드 되었습니다.`;
    }
}

const starcraft = new Game('Starcraft', 'Korea', 1000000);
console.log(starcraft.introduce()); // "Starcraft는 Korea에서 1000000회 다운로드 되었습니다."
