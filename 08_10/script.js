/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// Callback receives finalTip object, creates and outputs table on the DOM.
const printHTML = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr>
  `;
  document.querySelector("main").append(tipTable);
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
const tipCalculator = (sum, percentage, locale, currency, callback) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };
  // 2020/02/07 David - 
  // 2) printHTML is being run inside w/o passing values outside of tipCalculator
  callback(finalTip)
};


// 2020/02/07 David - 1)                  printHTML w/o parentheses is passing the entire function to tipCalculator 
// This is used in the event you may want to use different callback functions in lieu of printHTML
tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
