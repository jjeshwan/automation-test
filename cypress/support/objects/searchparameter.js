export default class SearchParameter {

    key;
    value;
    section;
    fieldType;

    constructor(_key, _value, _section, _fieldType) {
        this.key = _key;
        this.value = _value;
        this.section = _section;
        this.fieldType = _fieldType;
    }

    toString(){
        return `key => [${this.key}] value => [${this.value}] section => [${this.section}] fieldType => [${this.fieldType}]`;
    }
}