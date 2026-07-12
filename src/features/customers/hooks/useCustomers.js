import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer
} from "../services/customerService";

export default function useCustomers() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers
  });

  const createMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["customers"]
      })
  });

  const updateMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["customers"]
      })
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["customers"]
      })
  });

  return {
    ...query,
    addCustomer: createMutation.mutateAsync,
    updateCustomer: updateMutation.mutateAsync,
    deleteCustomer: deleteMutation.mutateAsync
  };
}