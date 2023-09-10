import {DashboardInfo} from '../types';
import ApiRoutes from '../common/ApiRoutes';
import {AxiosClient} from '../clients/AxiosClient';

export class DashboardService {
  private static instance: DashboardService | null = null;

  private constructor() {
    // Private constructor to prevent external instantiation.
  }

  static getInstance(): DashboardService {
    if (!DashboardService.instance) {
      DashboardService.instance = new DashboardService();
    }

    return DashboardService.instance;
  }

  async getDashboardInfo(): Promise<DashboardInfo> {
    return await AxiosClient.getInstance().getRequest<DashboardInfo>(
      ApiRoutes.getDashboardInfo,
    );
  }
}
