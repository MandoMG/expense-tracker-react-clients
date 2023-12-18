import {PreviousMonthsRecordInfo, RecordsInfo} from '../types';
import ApiRoutes from '../common/ApiRoutes';
import {AxiosClient} from '../clients/AxiosClient';

export class RecordService {
  private static instance: RecordService | null = null;

  private constructor() {
    // Private constructor to prevent external instantiation.
  }

  static getInstance(): RecordService {
    if (!RecordService.instance) {
      RecordService.instance = new RecordService();
    }

    return RecordService.instance;
  }

  async getRecordInfo(): Promise<RecordsInfo> {
    return await AxiosClient.getInstance().getRequest<RecordsInfo>(
      ApiRoutes.getRecordInfo,
    );
  }

  async getPreviousMonthsRecordInfo(): Promise<PreviousMonthsRecordInfo[]> {
    const previousMonthsInfo = await AxiosClient.getInstance().getRequest<PreviousMonthsRecordInfo[]>(
      ApiRoutes.getPreviousMonthsRecordInfo,
    );

    return previousMonthsInfo.map((monthInfo) => {
      return {
        ...monthInfo,
        balance: Number(monthInfo.balance),
        income: Number(monthInfo.income),
        expense: Number(monthInfo.expenses),
      }
    })
  }
}
