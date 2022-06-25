import TextUtil from "mandomg-expensetracker-common/src/util/TextUtil";
import { useState, useEffect } from "react";
import { Alert } from 'react-native';
import ApiRoutes from "../../../common/ApiRoutes";
import useAxios from "../../../hooks/useAxios";
import { Record, RecordsInfo } from "../../../types";

interface useRecordsProps {
  isRecordIncome?: boolean;
}

interface RecordCategoryResponse {
  categories: string[];
}

const useRecords = (props?: useRecordsProps) => {
  const { getRequest, postRequest, putRequest } = useAxios();
  const [recordsInfo, setRecordsInfo] = useState<RecordsInfo>();
  const [recordCategories, setRecordCategories] = useState<string[]>();

  const handleRecordDateConversion = (recordDate?: string): Date => {
    const date = new Date(recordDate || '');
    if (!date || !date.valueOf()) {
      return new Date();
    }

    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }

  const getRecordsInfo = async () => {
    const recordsInfo = await getRequest<RecordsInfo>(ApiRoutes.getRecordInfo);
    setRecordsInfo(recordsInfo);
  };

  const getRecordsCategories = async (isIncome: boolean) => {
    const response = await getRequest<RecordCategoryResponse>(TextUtil.formatString(ApiRoutes.getRecordCategories, [String(isIncome)]));
    setRecordCategories(response.categories);
  };

  const saveRecord = async (record: Record, recordId?: number) => {
    if (!!recordId) {
      const data = {
        record,
        recordId
      };
      await putRequest(ApiRoutes.updateRecord, data);
    } else {
      await postRequest(ApiRoutes.saveRecord, record);
    }
  };

  const deleteRecord = async (recordId: number) => {
    if (recordId) {
      await postRequest(TextUtil.formatString(ApiRoutes.deleteRecord, [recordId]));
    } else {
      const title = 'Error';
      const msg = 'Could not delete record.';
      Alert.alert(title, msg)
    }
  }

  useEffect(() => {
    if (props?.isRecordIncome !== undefined) {
      (() => getRecordsCategories(props?.isRecordIncome))()
    }
  }, [props?.isRecordIncome]);

  useEffect(() => {
    (() => getRecordsInfo())()
  }, []);

  return {
    categories: recordCategories,
    deleteRecord,
    getRecordsInfo,
    handleRecordDateConversion,
    recordsInfo,
    saveRecord
  }
};

export default useRecords;