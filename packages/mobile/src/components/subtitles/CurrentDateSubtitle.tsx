import { useDateUtil } from 'mandomg-expensetracker-common/src/hooks';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import commonStyles from '../../common/CommonStyles';

interface CurrentDateSubtitleProps {
  isTouchable?: boolean;
  onPress?: () => void;
}

const CurrentDateSubtitle = ({ isTouchable, onPress }: CurrentDateSubtitleProps) => {
  const { getCurrentMonthYear } = useDateUtil();

  return isTouchable ? (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 20, marginTop: 10 }}>
      <Text style={commonStyles.subheaderTitle}>{getCurrentMonthYear()}</Text>
    </TouchableOpacity>
  ) : (
    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
      <Text style={commonStyles.subheaderTitle}>{getCurrentMonthYear()}</Text>
    </View>
  );
};

export default CurrentDateSubtitle;