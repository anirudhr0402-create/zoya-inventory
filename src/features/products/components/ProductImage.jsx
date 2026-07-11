import {
  DEFAULT_PRODUCT_IMAGE,
  PRODUCT_IMAGES
} from "../constants/productImages";

export default function ProductImage({ name }) {
  return (
    <img
      src={
        PRODUCT_IMAGES[name] ||
        DEFAULT_PRODUCT_IMAGE
      }
      alt={name}
      className="h-12 w-12 rounded-lg border border-gray-200 object-cover"
    />
  );
}