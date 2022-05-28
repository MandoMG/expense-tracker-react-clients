import React, { useMemo, useState, useRef } from 'react';
import { Modal, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import ModalHeaderComponent from '../../components/headers/ModalHeader';
import LineSeparator from '../../components/lineSeparator/LineSeparator';
import { Category } from '../../types';
import CategoryDetailStyles from './styles/CategoryDetailModal.styles';

interface CategoryDetailModalProps {
  category?: Category;
  handleClose: () => void;
  handleSave: (category: Category, isEdit: boolean) => void;
}

enum FieldTypes {
  name = "Name",
  budget = "Budget"
}

const CategoryDetailModal = ({ category, handleClose, handleSave }: CategoryDetailModalProps) => {
  const [isExpense, setIsExpense] = useState<boolean>(category?.isExpense || false);
  const [hasBudget, setHasBudget] = useState<boolean>(category?.hasBudget || false);

  const isEditRef = useRef<boolean>(!!category);
  const nameRef = useRef<string>('');
  const budgetRef = useRef<string>('');

  const title = useMemo(() => {
    return isEditRef.current ? 'Edit Category' : 'Add Category';
  }, [isEditRef])

  const handleExpenseSwitchChange = (value: boolean) => {
    setIsExpense(value);
  };

  const handleBudgetSwitchChange = (value: boolean) => {
    setHasBudget(value);
  };

  const updateTextFieldRefValue = (value: string, fieldType: FieldTypes) => {
    switch (fieldType) {
      case FieldTypes.name:
        if (value !== nameRef.current) { nameRef.current = value }
        return;
      case FieldTypes.budget:
        if (value !== budgetRef.current) { budgetRef.current = value }
        return;
      default:
        return;
    }
  }

  const onSave = () => {
    const newCategory: Category = {
      name: nameRef.current,
      budget: Number(budgetRef.current),
      hasBudget: hasBudget,
      isExpense
    }
    handleSave(newCategory, isEditRef.current);
  };

  return (
    <Modal animationType='slide'>
      <SafeAreaView>
        <ModalHeaderComponent title={title} handleClose={() => handleClose()} handleSave={onSave} />
        <View>
          <Text style={CategoryDetailStyles.inputTitle}>Name</Text>
          <View style={CategoryDetailStyles.inputFieldWrapper}>
            <TextInput
              style={CategoryDetailStyles.inputField}
              defaultValue={category?.name || ''}
              onChangeText={(text) => updateTextFieldRefValue(text, FieldTypes.name)} />
          </View>
        </View>
        <View style={CategoryDetailStyles.sliderWrapper}>
          <View style={commonStyles.flexOne}>
            <Text style={CategoryDetailStyles.sliderText}>Is Expense</Text>
          </View>
          <View style={CategoryDetailStyles.sliderItemWrapper}>
            <Switch
              style={CategoryDetailStyles.sliderItem}
              trackColor={{ false: Colors.backgroundGray, true: Colors.expenseOrange }}
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
              trackColor={{ false: Colors.backgroundGray, true: Colors.expenseOrange }}
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
              defaultValue={String(category?.budget || '')}
              onChangeText={(text) => updateTextFieldRefValue(text, FieldTypes.budget)} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CategoryDetailModal;