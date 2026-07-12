import { useQuery } from "@tanstack/react-query";

import {
  getDashboardData
} from "../services/dashboardService";

export default function useDashboard() {

  return useQuery({

    queryKey: ["dashboard"],

    queryFn: getDashboardData,

    refetchInterval: 5000

  });

}