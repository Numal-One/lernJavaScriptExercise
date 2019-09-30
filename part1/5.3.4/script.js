console.log(extractCurrencyValue('$140'));

function extractCurrencyValue(str) {
    return parseInt(str.slice(1));
}