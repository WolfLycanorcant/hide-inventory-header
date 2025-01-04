Hooks.on("renderItemSheet", (app, html, data) => {
  // Find the currency flexrow element within the sheet and hide it
  const currencyRow = html.find(".currency.flexrow");
  if (currencyRow.length) {
    currencyRow.hide(); // Hide the element
  }
});
