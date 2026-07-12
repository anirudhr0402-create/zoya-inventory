import { useMutation } from "@tanstack/react-query";

import {
  createSale
} from "../services/saleService";

export default function useSales() {

  return useMutation({

    mutationFn: createSale

  });

}