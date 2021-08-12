export default function formatPrice(price) {
  const priceWDec = price.toFixed(2);
  return `${priceWDec}`.replace('.', ',');
}
