const english = require('./en.json')
const japanese = require('./ja.json')
const spanish = require('./es.json')

const strings = {
    en: english,
    ja: japanese,
    es: spanish,
}

const getLocaleStrings = (locale) => {
    return strings[locale] || strings['en']
}

module.exports = getLocaleStrings
