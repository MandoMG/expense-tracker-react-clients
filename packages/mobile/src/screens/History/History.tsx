import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import commonStyles from '../../common/CommonStyles';
import {useNavigation} from "@react-navigation/native";
import {RecordScreenNavigationProp} from "../../navigators/NativeStackNavigator";

const History = () => {
  const navigation = useNavigation<RecordScreenNavigationProp>();

  const onPreviousMonthsTap = () => {
    navigation.navigate('PreviousMonths');
  };

  const onCategoryComparisonTap = () => {
    navigation.navigate('PreviousCategoryComparison');
  };

  return (
    <ScreenWrapper>
      <View>
        <TouchableOpacity style={commonStyles.listItemWrapperNoFlex} onPress={onPreviousMonthsTap}>
          <Text style={commonStyles.listItemMainText}>
            Previous Record Summary
          </Text>
          <Text style={commonStyles.listItemSubText}>
            Displays the records entered for previous months up to 12 months
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.listItemWrapperNoFlex} onPress={onCategoryComparisonTap}>
          <Text style={commonStyles.listItemMainText}>
            Previous Category Comparison
          </Text>
          <Text style={commonStyles.listItemSubText}>
            Displays graphs for each category comparing expenses in previous
            months up to 12 months
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default History;
