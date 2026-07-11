import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory
} from "../services/categoryService";

export default function useCategories() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories
  });

  const createMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["categories"]
      })
  });

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["categories"]
      })
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["categories"]
      })
  });

  return {
    ...query,
    addCategory: createMutation.mutateAsync,
    updateCategory: updateMutation.mutateAsync,
    deleteCategory: deleteMutation.mutateAsync
  };
}