import TextUtil from "mandomg-expensetracker-common/src/util/TextUtil";
import { useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import ApiRoutes from "../../../common/ApiRoutes";
import useAxios from "../../../hooks/useAxios";
import { Category, CategoriesInfo } from "../../../types";

const useCategories = () => {
  const { getRequest, postRequest, putRequest } = useAxios();
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

      await putRequest(TextUtil.formatString(ApiRoutes.updateCategory, [id]), category);
    } else {
      await postRequest(ApiRoutes.saveCategory, category);
    }

    response = await getRequest<CategoriesInfo>(ApiRoutes.getCategoryInfo);
    setCategoriesInfo(response || {});
    setShouldOpenModal(false);
  }

  const deleteCategory = async (categoryId: number) => {
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
    selectedCategory,
    shouldOpenModal
  }
};

export default useCategories;
