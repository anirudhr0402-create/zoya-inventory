import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getInventory,
  getInventoryItem,
  saveInventory,
  updateInventory,
  addLedger
} from "../services/inventoryService";

export default function useInventory() {
  const queryClient =
    useQueryClient();

  const query = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory,
    staleTime: 1000 * 60 * 5
  });

  const updateMutation =
    useMutation({

      mutationFn: updateInventory,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: ["inventory"]
        });

      }

    });

  const createMutation =
    useMutation({

      mutationFn: saveInventory,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: ["inventory"]
        });

      }

    });

  return {

    ...query,

    getInventoryItem,

    saveInventory:
      createMutation.mutateAsync,

    updateInventory:
      updateMutation.mutateAsync,

    addLedger

  };
}