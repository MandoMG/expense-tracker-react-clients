import {useState, useRef} from 'react';
import {Alert} from 'react-native';
import {Category, BudgetSummaryItem} from '../../../types';
import {
  deleteCategoryById,
  getCategoryItem,
  saveCategory,
  updateCategory,
} from '../../../redux/thunks/categoriesThunks';
import {useAppDispatch as useDispatch} from '../../../redux/hooks';
import {resetSelectedCategory} from '../../../redux/slices/categorySlice';

const useCategories = () => {
  const dispatch = useDispatch();
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const selectedCategoryIdRef = useRef<string>();

  const onAddPress = () => {
    selectedCategoryIdRef.current = undefined;
    setSelectedCategoryId(undefined);
    setShouldOpenModal(true);
  };

  const handleCategoryItemOnPress = (selectedItem: BudgetSummaryItem) => {
    dispatch(getCategoryItem({categoryId: selectedItem.id}));
    setShouldOpenModal(true);
  };

  const handleModalClose = () => {
    setShouldOpenModal(false);
    dispatch(resetSelectedCategory());
  };

  const handleModalSave = async (category: Category, isEdit: boolean) => {
    if (isEdit) {
      dispatch(
        updateCategory({category, categoryId: String(category._id ?? '')}),
      );
    } else {
      dispatch(saveCategory({category}));
    }

    setShouldOpenModal(false);
  };

  const deleteCategory = async (categoryId: string) => {
    if (categoryId) {
      dispatch(deleteCategoryById({categoryId}));
    } else {
      const title = 'Error';
      const msg = 'Could not delete category.';
      Alert.alert(title, msg);
    }
  };

  return {
    deleteCategory,
    handleCategoryItemOnPress,
    handleModalClose,
    handleModalSave,
    onAddPress,
    selectedCategoryId,
    shouldOpenModal,
  };
};

export default useCategories;
