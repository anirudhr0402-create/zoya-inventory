import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getPurchases,
  addPurchase,
  updatePurchase,
  deletePurchase
} from "../services/purchaseService";

export default function usePurchases() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["purchases"],
    queryFn: getPurchases
  });

  const createMutation = useMutation({
    mutationFn: addPurchase,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["purchases"]
      })
  });

  const updateMutation = useMutation({
    mutationFn: updatePurchase,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["purchases"]
      })
  });

  const deleteMutation = useMutation({
    mutationFn: deletePurchase,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["purchases"]
      })
  });

  return {
    ...query,
    addPurchase: createMutation.mutateAsync,
    updatePurchase:
      updateMutation.mutateAsync,
    deletePurchase:
      deleteMutation.mutateAsync
  };
}