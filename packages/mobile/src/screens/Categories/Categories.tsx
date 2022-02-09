import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import GraphBarComponent from '../../components/graphBar/GraphBar';
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
      <View style={{ flex: 1 }}>
         <ScreenHeaderComponent title='Categories' />
         <View>
            <FlatList
               horizontal
               data={mockData}
               contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 30 }}
               renderItem={({ item }) => (
                  <GraphBarComponent percentage={item.percentage} categoryName={item.categoryName} />
               )}
            />
         </View>
         <View style={{
            flex: 1,
            marginTop: 10,
            marginHorizontal: 15
         }}>
            <CategoriesList handleOnPress={handleCategoryItemOnPress} />
         </View>
         {shouldOpenModal && selectedCategory && (
            <CategoryDetailModal category={selectedCategory} handleClose={() => setShouldOpenModal(false)} />
         )}
      </View>
   )
};

export default Categories;
