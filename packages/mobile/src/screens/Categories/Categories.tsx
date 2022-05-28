import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import { Category } from '../../types';
import CategoryDetailModal from './CategoryDetailModal';
import CategoriesList from './components/CategoriesList';
import useCategory from './hooks/useCategories';

const Categories = () => {
   const { categoriesInfo } = useCategory();
   const [shouldOpenModal, setShouldOpenModal] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState<Category>();

   const handleCategoryItemOnPress = (selectedItem: Category) => {
      setShouldOpenModal(true);
      setSelectedCategory(selectedItem);
   };

   return (
      <SafeAreaView>
         <ScreenHeaderComponent title='Categories' />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <CategoriesList categoryList={categoriesInfo?.categoryList || []} handleOnPress={handleCategoryItemOnPress} />
         </ScrollView>
         {shouldOpenModal && selectedCategory && (
            <CategoryDetailModal category={selectedCategory} handleClose={() => setShouldOpenModal(false)} />
         )}
      </SafeAreaView>
   )
};

export default Categories;
