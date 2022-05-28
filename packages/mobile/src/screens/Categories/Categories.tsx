import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CategoryDetailModal from './CategoryDetailModal';
import CategoriesList from './components/CategoriesList';
import useCategories from './hooks/useCategories';

const Categories = () => {
   const {
      categoriesInfo,
      handleCategoryItemOnPress,
      handleModalClose,
      handleModalSave,
      selectedCategory,
      shouldOpenModal
   } = useCategories();

   return (
      <SafeAreaView>
         <ScreenHeaderComponent title='Categories' />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <CategoriesList categoryList={categoriesInfo?.categoryList || []} handleOnPress={handleCategoryItemOnPress} />
         </ScrollView>
         {shouldOpenModal && selectedCategory && (
            <CategoryDetailModal category={selectedCategory} handleClose={handleModalClose} handleSave={handleModalSave} />
         )}
      </SafeAreaView>
   )
};

export default Categories;
