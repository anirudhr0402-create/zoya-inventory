import { useMemo } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getSales,
  createSale,
  updateSale,
  deleteSale
} from "../services/saleService";

export default function useSales() {
  const queryClient = useQueryClient();

  const {
    data = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ["sales"],
    queryFn: getSales
  });

  const createMutation =
    useMutation({
      mutationFn: createSale,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["sales"]
        });
      }
    });

  const updateMutation =
    useMutation({
      mutationFn: ({ id, sale }) =>
        updateSale(id, sale),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["sales"]
        });
      }
    });

  const deleteMutation =
    useMutation({
      mutationFn: deleteSale,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["sales"]
        });
      }
    });

  const stats = useMemo(() => {
    const revenue = data.reduce(
      (sum, sale) =>
        sum +
        Number(sale.quantity || 0) *
          Number(sale.unitPrice || 0),
      0
    );

    const quantity = data.reduce(
      (sum, sale) =>
        sum +
        Number(sale.quantity || 0),
      0
    );

    return {
      totalSales: data.length,
      totalRevenue: revenue,
      totalQuantity: quantity
    };
  }, [data]);

  return {
    data,
    isLoading,
    error,
    stats,

    createSale:
      createMutation.mutateAsync,

    updateSale: (id, sale) =>
      updateMutation.mutateAsync({
        id,
        sale
      }),

    deleteSale:
      deleteMutation.mutateAsync
  };
}