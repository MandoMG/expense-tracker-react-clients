import {createAsyncThunk} from "@reduxjs/toolkit";
import {DashboardService} from "../../services/dashboardService";

export const getDashboardInfo = createAsyncThunk(
  'dashboard/getInfo',
  async () => {
    return await DashboardService.getInstance().getDashboardInfo();
  }
)
