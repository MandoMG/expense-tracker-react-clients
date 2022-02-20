import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyles from '../../common/CommonStyles';
import { ScreenHeaderStyles } from './styles/HeaderStyles';

interface HeaderProps {
  leftHeaderAction?: () => void;
  title: string;
  rightHeaderItem?: any;
}

const ScreenHeaderComponent = (props: HeaderProps) => {
  const { leftHeaderAction, title, rightHeaderItem } = props;
  return (
    <View style={commonStyles.flexRow}>
      <View style={ScreenHeaderStyles.leftItemWrapper}>
        {!!leftHeaderAction && (
          <Icon name="chevron-left" size={18} style={{ color: 'black' }} onPress={leftHeaderAction} />
        )}
      </View>
      <View style={ScreenHeaderStyles.centerItemWrapper}>
        <Text style={commonStyles.headerTitle}> {title} </Text>
      </View>
      <View style={ScreenHeaderStyles.rightItemWrapper}>
        {!!rightHeaderItem && (
          <Icon name="chevron-left" size={18} style={{ color: 'black' }} />
        )}
      </View>
    </View>
  )
}

export default ScreenHeaderComponent;