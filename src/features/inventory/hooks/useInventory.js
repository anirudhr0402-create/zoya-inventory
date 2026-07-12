import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";

import {
  getInventory,
  updateInventory
} from "../services/inventoryService";

export default function useInventory() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory
  });

  const updateMutation = useMutation({
    mutationFn: updateInventory,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["inventory"]
      })
  });

  return {
    ...query,
    updateInventory:
      updateMutation.mutateAsync
  };
}