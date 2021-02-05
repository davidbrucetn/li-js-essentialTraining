/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

//2020/02/05 David Bruce

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat('de-DE',
    {
      style: 'currency',
      currency: 'EUR',
    }).format(value)
  return formattedValue
}

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip.toFixed(2))}
      Total:          ${formatter(locale, currency, total.toFixed(2))}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");
