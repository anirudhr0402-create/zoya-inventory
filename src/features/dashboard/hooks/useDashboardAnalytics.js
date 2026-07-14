import { useQuery } from "@tanstack/react-query";
import { getDashboardAnalytics } from "../services/dashboardAnalyticsService";

export default function useDashboardAnalytics() {
  return useQuery({
    queryKey: ["dashboard-analytics"],
    queryFn: getDashboardAnalytics,
    refetchInterval: 10000
  });
}