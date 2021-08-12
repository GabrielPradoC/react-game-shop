export default function sortFunc(sortOption, productsArray) {
  const products = [...productsArray];

  function sortScore(item1, item2) {
    return item1.score - item2.score;
  }

  function sortTitle(item1, item2) {
    return item1.name.localeCompare(item2.name);
  }

  function sortPrice(item1, item2) {
    return item2.price - item1.price;
  }

  switch (sortOption) {
    case 'price':
      products.sort(sortPrice);
      break;
    case 'score':
      products.sort(sortScore);
      break;
    case 'title':
      products.sort(sortTitle);
      break;
    default:
      products.sort(sortPrice);
      break;
  }

  return products;
}
