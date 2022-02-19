import React, { useState } from 'react';
import { View } from 'react-native';
import commonStyles from '../../common/CommonStyles';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import { Category } from '../../types';
import CategoryDetailModal from './CategoryDetailModal';
import CategoriesList from './components/CategoriesList';

const Categories = () => {
   const [shouldOpenModal, setShouldOpenModal] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState<Category>();

   const mockData = [
      { categoryName: 'Restaurants', percentage: 40 },
      { categoryName: 'Bills', percentage: 70 },
      { categoryName: 'Groceries', percentage: 30 },
      { categoryName: 'Streaming', percentage: 50 },
   ];

   const handleCategoryItemOnPress = (selectedItem: Category) => {
      setShouldOpenModal(true);
      setSelectedCategory(selectedItem);
   };

   return (
      <View style={commonStyles.flexOne}>
         <ScreenHeaderComponent title='Categories' />
         <View style={commonStyles.listWrapper}>
            <CategoriesList handleOnPress={handleCategoryItemOnPress} />
         </View>
         {shouldOpenModal && selectedCategory && (
            <CategoryDetailModal category={selectedCategory} handleClose={() => setShouldOpenModal(false)} />
         )}
      </View>
   )
};

export default Categories;
