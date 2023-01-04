export default class WildCard {
    constructor(_wildCard, _value) {
        this.wildCard = _wildCard;
        this.value = _value;
    }

    toString(){
        return `wildCard => [${this.wildCard}] value => [${this.value}]`;
    }
}