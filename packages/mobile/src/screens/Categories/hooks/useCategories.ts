import Axios from "axios";
import { useState, useEffect } from "react";
import { CategoriesInfo } from "../../../types";

const useRecords = () => {
  const [categoriesInfo, setCategoriesInfo] = useState<CategoriesInfo>();

  const getCategoriesInfo = async () => {
    const response = await Axios.get('http://localhost:5500/api/categories/getInfo');
    setCategoriesInfo(response.data);
  };

  useEffect(() => {
    (() => getCategoriesInfo())()
  }, []);

  return {
    categoriesInfo
  }
};

export default useRecords;