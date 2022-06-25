import { useState, useEffect } from "react";
import ApiRoutes from "../../../common/ApiRoutes";
import useAxios from "../../../hooks/useAxios";
import { DashboardInfo } from "../../../types";

const useHome = () => {
  const { getRequest } = useAxios();
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfo>();

  const getDashboardInfo = async () => {
    const dashboardInfo = await getRequest<DashboardInfo>(ApiRoutes.getDashboardInfo);
    setDashboardInfo(dashboardInfo);
  };

  useEffect(() => {
    (() => getDashboardInfo())()
  }, []);

  return { dashboardInfo }
};

export default useHome;