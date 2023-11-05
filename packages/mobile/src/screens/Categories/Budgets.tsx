import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React, {useEffect, useMemo} from 'react';
import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import commonStyles from '../../common/CommonStyles';
import CategoriesList from './components/CategoriesList';
import useCategories from './hooks/useCategories';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import Icon from "react-native-vector-icons/FontAwesome5";
import {useNavigation} from "@react-navigation/native";
import {BudgetScreenNavigationProp} from "../../navigators/NativeStackNavigator";
import CategoryDetailModal from "./CategoryDetailModal";

const isAndroid = Platform.OS === 'android';

const Budgets = () => {
  const navigation = useNavigation<BudgetScreenNavigationProp>();
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

  const headerStyle = useMemo(() => {
    return isAndroid
      ? commonStyles.androidHeaderText
      : commonStyles.iosHeaderText;
  }, [Platform]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={onAddPress}>
            {isAndroid ? (
              <Icon style={headerStyle} name="plus" />
            ) : (
              <Text style={headerStyle}>Add</Text>
            )}
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <ScreenWrapper>
      <View>
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
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <CategoriesList
            categoryList={categoriesInfo?.categoryList || []}
            onDelete={deleteCategory}
            handleOnPress={handleCategoryItemOnPress}
          />
        </ScrollView>
        {shouldOpenModal && (
          <CategoryDetailModal category={selectedCategory} handleClose={handleModalClose} handleSave={handleModalSave} />
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Budgets;
