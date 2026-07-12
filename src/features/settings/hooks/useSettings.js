import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";

import {
  getSettings,
  updateSettings
} from "../services/settingsService";

export default function useSettings() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings
  });

  const mutation = useMutation({
    mutationFn: updateSettings,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      })
  });

  return {
    ...query,
    updateSettings: mutation.mutateAsync
  };
}