import React, { useState } from 'react';
import { ColorPropType, Modal, Switch, Text, TextInput, View } from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import ModalHeaderComponent from '../../components/headers/ModalHeader';
import LineSeparator from '../../components/lineSeparator/LineSeparator';
import { Category } from '../../types';
import CategoryDetailStyles from './styles/CategoryDetailModal.styles';

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
      <View style={commonStyles.flexOne}>
        <ModalHeaderComponent title="Edit Category" handleClose={() => handleClose()} />
        <View>
          <Text style={CategoryDetailStyles.inputTitle}>Name</Text>
          <View style={CategoryDetailStyles.inputFieldWrapper}>
            <TextInput style={CategoryDetailStyles.inputField} defaultValue={category.name} />
          </View>
        </View>
        <View style={CategoryDetailStyles.sliderWrapper}>
          <View style={commonStyles.flexOne}>
            <Text style={CategoryDetailStyles.sliderText}>Is Expense</Text>
          </View>
          <View style={CategoryDetailStyles.sliderItemWrapper}>
            <Switch
              style={CategoryDetailStyles.sliderItem}
              trackColor={{ false: Colors.backgroundGray, true: Colors.backgroundGray }}
              onValueChange={handleExpenseSwitchChange}
              value={isExpense} />
          </View>
        </View>
        <LineSeparator />
        <View style={CategoryDetailStyles.sliderWrapper}>
          <View style={commonStyles.flexOne}>
            <Text style={CategoryDetailStyles.sliderText}>Has Budget</Text>
          </View>
          <View style={CategoryDetailStyles.sliderItemWrapper}>
            <Switch
              style={CategoryDetailStyles.sliderItem}
              trackColor={{ false: Colors.backgroundGray, true: Colors.backgroundGray }}
              onValueChange={handleExpenseSwitchChange}
              value={hasBudget} />
          </View>
        </View>
        <View>
          <Text style={CategoryDetailStyles.inputTitle}>Budget</Text>
          <View style={CategoryDetailStyles.inputFieldWrapper}>
            <TextInput
              style={CategoryDetailStyles.inputField}
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