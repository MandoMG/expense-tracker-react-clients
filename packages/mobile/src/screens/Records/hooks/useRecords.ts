import Axios from "axios";
import { useState, useEffect } from "react";
import { RecordsInfo } from "../../../types";

const useRecords = () => {
  const [recordsInfo, setRecordsInfo] = useState<RecordsInfo>();

  const getRecordsInfo = async () => {
    const response = await Axios.get('http://localhost:5500/api/records/getInfo');
    setRecordsInfo(response.data);
  };

  useEffect(() => {
    (() => getRecordsInfo())()
  }, []);

  return { recordsInfo }
};

export default useRecords;