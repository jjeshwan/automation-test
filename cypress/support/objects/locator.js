export class Locator {

    type;
    value;
    note;

    constructor(type, value, note = "none") {
        this.type = type
        this.value = value
        this.note = note
    }

    toString(){
        return `type => [${this.type}] value => [${this.value}]`;
    }
}