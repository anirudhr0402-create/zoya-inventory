import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct
} from "../services/productService";

export default function useProducts() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  const createMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
  });

  return {
    ...query,
    addProduct: createMutation.mutateAsync,
    updateProduct: updateMutation.mutateAsync,
    deleteProduct: deleteMutation.mutateAsync
  };
}