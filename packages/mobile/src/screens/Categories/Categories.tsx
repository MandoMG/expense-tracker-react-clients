import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CategoryDetailModal from './CategoryDetailModal';
import CategoriesList from './components/CategoriesList';
import useCategories from './hooks/useCategories';

const Categories = () => {
   const {
      categoriesInfo,
      deleteCategory,
      handleCategoryItemOnPress,
      handleModalClose,
      handleModalSave,
      onAddPress,
      selectedCategory,
      shouldOpenModal
   } = useCategories();

   const rightHeaderAction = {
      onPress: onAddPress,
      title: 'Add',
      isIcon: false
   };

   return (
      <SafeAreaView>
         <ScreenHeaderComponent title='Categories' rightHeaderAction={rightHeaderAction} />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <CategoriesList
               categoryList={categoriesInfo?.categoryList || []}
               onDelete={deleteCategory}
               handleOnPress={handleCategoryItemOnPress} />
         </ScrollView>
         {shouldOpenModal && (
            <CategoryDetailModal category={selectedCategory} handleClose={handleModalClose} handleSave={handleModalSave} />
         )}
      </SafeAreaView>
   )
};

export default Categories;
