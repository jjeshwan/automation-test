const DEFAULT_INPUT_DELAY_SLOW = 200;
const DEFAULT_TIMEOUT = 35000;
const DEFAULT_VIEWPORT = {
     width: 1920,
     height: 1080,
};

const WILD_CARDS = {
    ELEMENT_TEXT: "<elementText>",
    INT_VALUE: (value) => {
        return `<int${value}>`
    },
    LANG_CODE: "<langCode>",
    PARAMETER_IDENTIFIER: "<parameterIdentifier>",
    FIELD_TYPE: "<fieldType>"
}

const ATTRIBUTES = {
    COL_ID: "col-id"
}

const DEFAULT_SEARCH_RESULT_MAX_AMOUNT = 10;

const LOCATOR_TYPES = {
    XPATH: 1,
    CSS: 2,
    SELECTOR: 4,
    DATA_CY: 8,
    ID: 16
};

module.exports = {
    DEFAULT_INPUT_DELAY_SLOW,
    DEFAULT_TIMEOUT,
    DEFAULT_VIEWPORT,
    WILD_CARDS,
    ATTRIBUTES,
    DEFAULT_SEARCH_RESULT_MAX_AMOUNT,
    LOCATOR_TYPES,
};



