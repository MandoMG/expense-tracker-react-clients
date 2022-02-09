import React, { useState } from 'react';
import { Modal, Switch, Text, TextInput, View } from 'react-native';
import ModalHeaderComponent from '../../components/headers/ModalHeader';
import { Category } from '../../types';

interface CategoryDetailModalProps {
  category: Category;
  handleClose: () => void;
}

const CategoryDetailModal = ({ category, handleClose }: CategoryDetailModalProps) => {
  const [isExpense, setIsExpense] = useState<boolean>(category.isExpense);
  const [hasBudget, setHasBudget] = useState<boolean>(category.hasBudget);

  const handleExpenseSwitchChange = (value: boolean) => {
    setIsExpense(value);
  };

  const handleBudgetSwitchChange = (value: boolean) => {
    setHasBudget(value);
  };


  return (
    <Modal animationType='slide'>
      <View style={{ flex: 1 }}>
        <ModalHeaderComponent title="Edit Category" handleClose={() => handleClose()} />
        <View style={{ marginTop: 8 }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Name</Text>
          <View style={{ marginTop: 8, backgroundColor: 'white', height: 40, borderRadius: 15, paddingHorizontal: 15 }}>
            <TextInput style={{ borderColor: '#505050', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} defaultValue={category.name} />
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
          <View style={{ marginTop: 8, backgroundColor: 'white', height: 40, borderRadius: 15, paddingHorizontal: 15 }}>
            <TextInput
              style={{ borderColor: '#505050', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}
              editable={hasBudget}
              keyboardType='decimal-pad'
              defaultValue={String(category.budget)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryDetailModal;