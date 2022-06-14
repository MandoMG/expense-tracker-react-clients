import Axios from "axios";
import { useState, useEffect } from "react";
import { Alert } from 'react-native';
import { Record, RecordsInfo } from "../../../types";

interface useRecordsProps {
  isRecordIncome?: boolean;
}

const useRecords = (props?: useRecordsProps) => {
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
    const response = await Axios.get('http://localhost:5500/api/records/getInfo');
    setRecordsInfo(response.data);
  };

  const getRecordsCategories = async (isIncome: boolean) => {
    const response = await Axios.post('http://localhost:5500/api/records/getRecordsCategories', { isIncome });
    setRecordCategories(response.data.categories);
  };

  const saveRecord = async (record: Record, recordId?: number) => {
    if (!!recordId) {
      const data = {
        record,
        recordId
      };
      await Axios.put('http://localhost:5500/api/records/updateRecord', data);
    } else {
      await Axios.post('http://localhost:5500/api/records/saveRecord', record);
    }
  };

  const deleteRecord = async (recordId: number) => {
    if (recordId) {
      await Axios.post(`http://localhost:5500/api/records/deleteRecord/${recordId}`);
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