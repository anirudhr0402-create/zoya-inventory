import {
  useMutation
} from "@tanstack/react-query";

import {
  createPurchase
} from "../services/purchaseService";

export default function usePurchases() {

  return useMutation({

    mutationFn: createPurchase

  });

}