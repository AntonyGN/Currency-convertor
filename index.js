const form = document.querySelector("form");
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const amount = document.querySelector("#amount");
const result = document.querySelector("#result span");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (!amount.value || isNaN(amount.value)) {
    result.textContent = "Invalid amount";
    return;
  }

  // fetch exchange rate from function
  const exchangeRate = getExchangeRate(fromCurrency.value, toCurrency.value);
  const convertedAmount = amount.value * exchangeRate;
  
  result.textContent = convertedAmount.toFixed(2);
});

function getExchangeRate(from, to) {
  if (from === "USD" && to === "EUR") {
    return 0.86;
}
if (from === "USD" && to === "KSH") {
  return 107.36;
}
if (from === "KSH" && to === "USD") {
  return 0.00932;
}
if (from === "EUR" && to === "USD") {
   return 1.07;
}
if (from === "EUR" && to === "KSH") {
    return 133.53;
}
if (from === "KSH" && to === "EUR") {
    return 0.0075;
}
}