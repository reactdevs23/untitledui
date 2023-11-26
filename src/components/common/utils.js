function convertTimestampToFormattedDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const day = date.getDate();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const monthIndex = date.getMonth();
  const year = date.getFullYear().toString().slice(2); // Get the last two digits of the year

  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
  return formattedDate;
}

function shortenEthereumAddress(address) {
  const startChars = address.slice(0, 7); // First 7 characters
  const endChars = address.slice(-6); // Last 6 characters

  return startChars + "..." + endChars;
}
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const numberFormator = (number) => {
  const [beforeDecimal, afterDecimal] = number.toString().split(".");
  const afterDecimalValue = afterDecimal ? +afterDecimal : "00";
  return [+beforeDecimal, afterDecimalValue];
};
export {
  convertTimestampToFormattedDate,
  shortenEthereumAddress,
  formatNumberWithCommas,
  numberFormator,
};
