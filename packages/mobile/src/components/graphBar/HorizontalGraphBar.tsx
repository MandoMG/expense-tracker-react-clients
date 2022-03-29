import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';

interface GraphBarProps {
  percentage: number;
  categoryName: string;
  barWidth?: number;
}

const HorizontalGraphBarComponent = (props: GraphBarProps) => {
  const { percentage, categoryName, barWidth } = props;
  const DEFAULT_BAR_WIDHT = 100;

  const getWidth = () => {
    return barWidth || DEFAULT_BAR_WIDHT;
  }

  return (
    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
      <View style={{ flex: 1 }}>
        <Text style={commonStyles.listItemMainText}> {categoryName} </Text>
      </View>
      <View style={{
        overflow: "hidden",
        justifyContent: "flex-end",
        width: getWidth()
      }}>
        <View style={{
          width: getWidth(),
          height: 20,
          flexDirection: 'row',
          alignSelf: "center",
          backgroundColor: Colors.backgroundGray,
          borderRadius: 20,
          overflow: "hidden",
        }}>
          <View style={{
            borderRadius: 20,
            backgroundColor: Colors.expenseOrange,
            width: getWidth() * (percentage / 100)
          }}>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HorizontalGraphBarComponent;
