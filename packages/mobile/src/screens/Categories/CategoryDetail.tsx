import React, { useEffect, useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import HeaderComponent from '../../components/header/Header';
import { TabNavigationPropsParams, TabNavigationScreensParams } from '../../types';

interface CategoryDetailProps {
  navigation: BottomTabNavigationProp<TabNavigationScreensParams>
  route: RouteProp<TabNavigationPropsParams, 'Category'>
}

const CategoryDetail = ({ navigation, route }: CategoryDetailProps) => {
  const { category } = route.params;
  const [isExpense, setIsExpense] = useState<boolean>(category.isExpense);
  const [hasBudget, setHasBudget] = useState<boolean>(category.hasBudget);

  const navigateBack = () => {
    navigation.jumpTo('Categories');
  }

  const handleExpenseSwitchChange = (value: boolean) => {
    setIsExpense(value);
  };

  const handleBudgetSwitchChange = (value: boolean) => {
    setHasBudget(value);
  };

  useEffect(() => {
    setHasBudget(category.hasBudget);
    setIsExpense(category.isExpense);
  }, [route]);

  return (
    <View style={{ flex: 1, backgroundColor: '#4285F4' }}>
      <HeaderComponent title="Edit Category" leftHeaderAction={() => navigateBack()} />
      <View>
        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Name</Text>
        <View style={{ marginTop: 8, marginHorizontal: 10, backgroundColor: 'white', height: 40, borderRadius: 15, paddingHorizontal: 15 }}>
          <TextInput value={category.name} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Is Expense</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Switch style={{ marginTop: 3 }} trackColor={{ false: "#DDDDDD", true: "#DDDDDD" }} value={isExpense} onValueChange={handleExpenseSwitchChange} />
        </View>
      </View>
      <View style={{ borderWidth: 0.3, marginTop: 10, marginHorizontal: 10, borderColor: '#DDDDDD' }} />
      <View style={{ flexDirection: 'row', marginTop: 8, marginRight: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Has Budget</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Switch style={{ marginTop: 3 }} trackColor={{ false: "#DDDDDD", true: "#DDDDDD" }} value={hasBudget} onValueChange={handleBudgetSwitchChange} />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Budget</Text>
        <View style={{ marginTop: 8, marginHorizontal: 10, backgroundColor: 'white', height: 40, borderRadius: 15, paddingHorizontal: 15 }}>
          <TextInput editable={hasBudget} keyboardType='decimal-pad' defaultValue={String(category.budget)} />
        </View>
      </View>
    </View>
  )
};

export default CategoryDetail;