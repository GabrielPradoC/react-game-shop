export default function createImageUrl(imageUrl) {
  return `${process.env.PUBLIC_URL}/assets/${imageUrl}`;
}
