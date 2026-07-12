import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";

import {
  getSales,
  addSale,
  updateSale,
  deleteSale
} from "../services/saleService";

export default function useSales() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["sales"],
    queryFn: getSales
  });

  const createMutation = useMutation({
    mutationFn: addSale,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sales"]
      })
  });

  const updateMutation = useMutation({
    mutationFn: updateSale,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sales"]
      })
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSale,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sales"]
      })
  });

  return {
    ...query,
    addSale: createMutation.mutateAsync,
    updateSale: updateMutation.mutateAsync,
    deleteSale: deleteMutation.mutateAsync
  };
}