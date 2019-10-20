export class Herodi {
    id: number;
    name: string;
    tid: string;
}

let nextId = 100;

export class HeroReturn {
    constructor(
        public id = nextId++,
        public hero: Herodi,
        public income = 0) {
        if (id === 0) {
            id = nextId++;
        }
    }
    get name() {
        return this.hero.name;
    }
    get tax() {
        return this.income ? .10 * this.income : 0;
    }
    get tid() {
        return this.hero.tid;
    }
    toString() {
        return `${this.hero.name}`;
    }
    clone() {
        return new HeroReturn(this.id, this.hero, this.income);
    }
}




