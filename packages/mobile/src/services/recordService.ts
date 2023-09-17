import {RecordsInfo} from '../types';
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
}
