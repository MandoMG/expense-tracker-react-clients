import React from 'react';
import { FlatList, View } from 'react-native';
import GraphBarComponent from '../../components/graphBar/GraphBar';
import HeaderComponent from '../../components/header/Header';
import CategoriesList from './components/CategoriesList';

const Categories = () => {
   const mockData = [
      { categoryName: 'Restaurants', percentage: 40 },
      { categoryName: 'Bills', percentage: 70 },
      { categoryName: 'Groceries', percentage: 30 },
      { categoryName: 'Streaming', percentage: 50 },
   ];

   return (
      <View style={{ flex: 1, backgroundColor: '#4285F4' }}>
         <HeaderComponent title='Categories' />
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
         }}>
            <CategoriesList />
         </View>
      </View>
   )
};

export default Categories;
