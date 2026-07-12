import {
  getAll,
  create,
  update,
  remove
} from "./firestoreService";

import { COLLECTIONS } from "./collections";

export const ProductRepository = {

  getAll() {
    return getAll(COLLECTIONS.PRODUCTS);
  },

  create(product) {
    return create(
      COLLECTIONS.PRODUCTS,
      product
    );
  },

  update(id, product) {
    return update(
      COLLECTIONS.PRODUCTS,
      id,
      product
    );
  },

  delete(id) {
    return remove(
      COLLECTIONS.PRODUCTS,
      id
    );
  }

};