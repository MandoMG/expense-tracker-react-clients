import {
  Category,
  PreviousMonthsRecordInfo,
  Record,
  RecordsInfo,
} from '../types';
import ApiRoutes from '../common/ApiRoutes';
import {AxiosClient} from '../clients/AxiosClient';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';

interface RecordCategoryResponse {
  categories: Category[];
}

interface GetRecordsParams {
  isIncome: boolean;
}

export interface SingleRecordsParams {
  recordId: string;
}

export interface SaveUpdateRecordParams {
  recordId?: Record;
  record: Record;
}

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

  // this should return all categories and map the expense and income categories
  // into string names
  async getRecordCategories({isIncome}: GetRecordsParams): Promise<string[]> {
    const response =
      await AxiosClient.getInstance().getRequest<RecordCategoryResponse>(
        ApiRoutes.getRecordCategories,
        {isIncome},
      );

    return response.categories.map(category => category.name);
  }

  async getRecordData({recordId}: SingleRecordsParams): Promise<Record | null> {
    const getRecordEndpoint = TextUtil.formatString(
      ApiRoutes.getSingleRecordInfo,
      [recordId],
    );

    return await AxiosClient.getInstance().getRequest<Record>(
      getRecordEndpoint,
    );
  }

  async deleteRecord({recordId}: SingleRecordsParams): Promise<void> {
    const deleteRecordEndpoint = TextUtil.formatString(ApiRoutes.deleteRecord, [
      recordId,
    ]);
    await AxiosClient.getInstance().postRequest(deleteRecordEndpoint);
  }

  async saveRecord({record}: SaveUpdateRecordParams): Promise<void> {
    await AxiosClient.getInstance().postRequest(ApiRoutes.saveRecord, record);
  }

  async updateRecord(params: SaveUpdateRecordParams): Promise<void> {
    const {record, recordId} = params;
    const updateRecordEndpoint = TextUtil.formatString(ApiRoutes.updateRecord, [
      String(recordId),
    ]);

    await AxiosClient.getInstance().putRequest(updateRecordEndpoint, record);
  }

  async getPreviousMonthsRecordInfo(): Promise<PreviousMonthsRecordInfo[]> {
    const previousMonthsInfo = await AxiosClient.getInstance().getRequest<
      PreviousMonthsRecordInfo[]
    >(ApiRoutes.getPreviousMonthsRecordInfo);

    return previousMonthsInfo.map(monthInfo => {
      return {
        ...monthInfo,
        balance: Number(monthInfo.balance),
        income: Number(monthInfo.income),
        expense: Number(monthInfo.expenses),
      };
    });
  }
}
