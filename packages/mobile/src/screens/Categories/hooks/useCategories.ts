import TextUtil from "mandomg-expensetracker-common/src/util/TextUtil";
import { useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import ApiRoutes from "../../../common/ApiRoutes";
import useAxios from "../../../hooks/useAxios";
import {Category, CategoriesInfo, BudgetSummaryItem} from "../../../types";

const useCategories = () => {
  const { getRequest, postRequest, putRequest } = useAxios();
  const [categoriesInfo, setCategoriesInfo] = useState<CategoriesInfo>();
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const selectedCategoryIdRef = useRef<string>();

  const onAddPress = () => {
    selectedCategoryIdRef.current = undefined;
    setSelectedCategoryId(undefined);
    setShouldOpenModal(true);
  }

  const handleCategoryItemOnPress = (selectedItem: BudgetSummaryItem) => {
    setShouldOpenModal(true);
    setSelectedCategoryId(selectedItem.id);
    selectedCategoryIdRef.current = selectedItem.id;
  };

  const handleModalClose = () => {
    selectedCategoryIdRef.current = '';
    setShouldOpenModal(false);
  }

  const handleModalSave = async (category: Category, isEdit: boolean) => {
    let response;
    if (isEdit) {
      const id = selectedCategoryIdRef.current;

      await putRequest(TextUtil.formatString(ApiRoutes.updateCategory, [id]), category);
    } else {
      await postRequest(ApiRoutes.saveCategory, category);
    }

    response = await getRequest<CategoriesInfo>(ApiRoutes.getCategoryInfo);
    setCategoriesInfo(response || {});
    setShouldOpenModal(false);
  }

  const deleteCategory = async (categoryId: string) => {
    if (categoryId) {
      await postRequest(TextUtil.formatString(ApiRoutes.deleteCategory, [categoryId]));
      await getCategoriesInfo();
    } else {
      const title = 'Error';
      const msg = 'Could not delete category.';
      Alert.alert(title, msg)
    }
  }

  const getCategoriesInfo = async () => {
    const categoriesInfo = await getRequest<CategoriesInfo>(ApiRoutes.getCategoryInfo);
    setCategoriesInfo(categoriesInfo);
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
    selectedCategoryId,
    shouldOpenModal
  }
};

export default useCategories;
