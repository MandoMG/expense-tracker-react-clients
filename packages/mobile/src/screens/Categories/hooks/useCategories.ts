import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import { Category, CategoriesInfo } from "../../../types";

const useCategories = () => {
  const [categoriesInfo, setCategoriesInfo] = useState<CategoriesInfo>();
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const selectedCategoryIdRef = useRef<number>();

  const onAddPress = () => {
    selectedCategoryIdRef.current = undefined;
    setSelectedCategory(undefined);
    setShouldOpenModal(true);
  }

  const handleCategoryItemOnPress = (selectedItem: Category) => {
    setShouldOpenModal(true);
    setSelectedCategory(selectedItem);
    selectedCategoryIdRef.current = selectedItem._id;
  };

  const handleModalClose = () => {
    selectedCategoryIdRef.current = 0;
    setShouldOpenModal(false);
  }

  const handleModalSave = async (category: Category, isEdit: boolean) => {
    let response;
    if (isEdit) {
      const id = selectedCategoryIdRef.current;
      response = await Axios.put(`http://localhost:5500/api/categories/updateCategory/${id}`, category);
    } else {
      await Axios.post(`http://localhost:5500/api/categories/saveCategory`, category);
      response = await Axios.get('http://localhost:5500/api/categories/getInfo');
    }
    setCategoriesInfo(response?.data || {});
    setShouldOpenModal(false);
  }

  const deleteCategory = async (categoryId: number) => {
    if (categoryId) {
      await Axios.post(`http://localhost:5500/api/categories/deleteCategory/${categoryId}/`);
      await getCategoriesInfo();
    } else {
      const title = 'Error';
      const msg = 'Could not delete category.';
      Alert.alert(title, msg)
    }
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
    deleteCategory,
    handleCategoryItemOnPress,
    handleModalClose,
    handleModalSave,
    onAddPress,
    selectedCategory,
    shouldOpenModal
  }
};

export default useCategories;