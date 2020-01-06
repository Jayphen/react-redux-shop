import numeral from "numeral";

export default function(price) {
  return numeral(price).format("$0.00");
}
