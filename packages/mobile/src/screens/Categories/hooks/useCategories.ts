import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {useState, useRef} from 'react';
import {Alert} from 'react-native';
import ApiRoutes from '../../../common/ApiRoutes';
import useAxios from '../../../hooks/useAxios';
import {Category, BudgetSummaryItem} from '../../../types';
import {
  deleteCategoryById,
  getCategoryItem,
  saveCategory,
} from '../../../redux/thunks/categoriesThunks';
import {useAppDispatch as useDispatch} from '../../../redux/hooks';
import {resetSelectedCategory} from '../../../redux/slices/categorySlice';

const useCategories = () => {
  const {putRequest} = useAxios();
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
    setShouldOpenModal(true);
    dispatch(getCategoryItem({categoryId: selectedItem.id}));
  };

  const handleModalClose = () => {
    setShouldOpenModal(false);
    dispatch(resetSelectedCategory());
  };

  const handleModalSave = async (category: Category, isEdit: boolean) => {
    if (isEdit) {
      const id = selectedCategoryIdRef.current;

      await putRequest(
        TextUtil.formatString(ApiRoutes.updateCategory, [id]),
        category,
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
