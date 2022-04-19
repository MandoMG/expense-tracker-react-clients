import Axios from "axios";
import { useState, useEffect } from "react";
import { Record, RecordsInfo } from "../../../types";

const useRecords = () => {
  const [recordsInfo, setRecordsInfo] = useState<RecordsInfo>();

  const getRecordsInfo = async () => {
    const response = await Axios.get('http://localhost:5500/api/records/getInfo');
    setRecordsInfo(response.data);
  };

  const saveRecord = async (record: Record) => {
    await Axios.post('http://localhost:5500/api/records/saveRecord', record);
  };

  useEffect(() => {
    (() => getRecordsInfo())()
  }, []);

  return {
    getRecordsInfo,
    recordsInfo,
    saveRecord
  }
};

export default useRecords;