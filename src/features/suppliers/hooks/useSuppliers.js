import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier
} from "../services/supplierService";

export default function useSuppliers() {

  const queryClient =
    useQueryClient();

  const query = useQuery({
    queryKey: ["suppliers"],
    queryFn: getSuppliers
  });

  const createMutation =
    useMutation({
      mutationFn: addSupplier,
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: [
            "suppliers"
          ]
        })
    });

  const updateMutation =
    useMutation({
      mutationFn: updateSupplier,
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: [
            "suppliers"
          ]
        })
    });

  const deleteMutation =
    useMutation({
      mutationFn: deleteSupplier,
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: [
            "suppliers"
          ]
        })
    });

  return {

    ...query,

    addSupplier:
      createMutation.mutateAsync,

    updateSupplier:
      updateMutation.mutateAsync,

    deleteSupplier:
      deleteMutation.mutateAsync

  };

}