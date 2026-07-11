import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../services/dashboardService";

export default function useDashboard() {
  return useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary
  });
}