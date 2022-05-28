import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Category, CategoriesInfo } from "../../../types";

const useCategories = () => {
  const [categoriesInfo, setCategoriesInfo] = useState<CategoriesInfo>();
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const selectedCategoryIdRef = useRef<number>();

  const handleCategoryItemOnPress = (selectedItem: Category) => {
    setShouldOpenModal(true);
    setSelectedCategory(selectedItem);
    selectedCategoryIdRef.current = selectedItem._id;
  };

  const handleModalClose = () => {
    selectedCategoryIdRef.current = 0;
    setShouldOpenModal(false);
  }

  const handleModalSave = async (updatedCategory: Category, isEdit: boolean) => {
    let response;
    if (isEdit) {
      const id = selectedCategoryIdRef.current;
      console.log('ID: ', selectedCategoryIdRef.current)
      response = await Axios.put(`http://localhost:5500/api/categories/saveCategory/${id}`, updatedCategory);
    }
    setCategoriesInfo(response?.data || {});
    setShouldOpenModal(false);
  }

  const getCategoriesInfo = async () => {
    const response = await Axios.get('http://localhost:5500/api/categories/getInfo');
    setCategoriesInfo(response.data);
  };

  useEffect(() => {
    (() => getCategoriesInfo())()
  }, []);

  return {
    categoriesInfo,
    handleCategoryItemOnPress,
    handleModalClose,
    handleModalSave,
    selectedCategory,
    shouldOpenModal
  }
};

export default useCategories;