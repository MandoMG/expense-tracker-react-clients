import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../common/CommonStyles';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CategoryDetailModal from './CategoryDetailModal';
import CategoriesList from './components/CategoriesList';
import useCategories from './hooks/useCategories';
import Colors from '../../common/Colors';

const Categories = () => {
  const {
    categoriesInfo,
    deleteCategory,
    handleCategoryItemOnPress,
    handleModalClose,
    handleModalSave,
    onAddPress,
    selectedCategory,
    shouldOpenModal,
  } = useCategories();

  const rightHeaderAction = {
    onPress: onAddPress,
    title: 'Add',
    isIcon: false,
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.appBackground}}>
      <ScreenHeaderComponent
        title="Categories"
        rightHeaderAction={rightHeaderAction}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View style={commonStyles.listItemLeftColumn}>
            <Text style={commonStyles.boldText}>Total Budget</Text>
          </View>
          <View style={commonStyles.listItemRightColumn}>
            <Text style={commonStyles.boldText}>
              {TextUtil.formatCurrency(categoriesInfo?.totalBudget || 0)}
            </Text>
          </View>
        </View>
        <CategoriesList
          categoryList={categoriesInfo?.categoryList || []}
          onDelete={deleteCategory}
          handleOnPress={handleCategoryItemOnPress}
        />
      </ScrollView>
      {shouldOpenModal && (
        <CategoryDetailModal
          category={selectedCategory}
          handleClose={handleModalClose}
          handleSave={handleModalSave}
        />
      )}
    </SafeAreaView>
  );
};

export default Categories;
