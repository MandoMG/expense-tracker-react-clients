import Axios from "axios";
import { useState, useEffect } from "react";
import { DashboardInfo } from "../../../types";

const useHome = () => {
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfo>();

  const getDashboardInfo = async () => {
    const response = await Axios.get('http://localhost:5500/api/dashboard/getInfo');
    setDashboardInfo(response.data);
  };

  useEffect(() => {
    (() => getDashboardInfo())()
  }, []);

  return { dashboardInfo }
};

export default useHome;