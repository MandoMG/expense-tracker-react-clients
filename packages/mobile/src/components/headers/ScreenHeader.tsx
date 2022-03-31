import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyles from '../../common/CommonStyles';
import { ScreenHeaderStyles } from './styles/HeaderStyles';

interface HeaderAction {
  onPress?: () => void;
  title?: string;
  isIcon?: boolean;
}

interface HeaderProps {
  leftHeaderAction?: HeaderAction;
  title: string;
  rightHeaderAction?: HeaderAction;
}

const ScreenHeaderComponent = (props: HeaderProps) => {
  const { leftHeaderAction, title, rightHeaderAction } = props;
  return (
    <View style={commonStyles.flexRow}>
      <View style={ScreenHeaderStyles.leftItemWrapper}>
        {!!leftHeaderAction && (
          <TouchableOpacity onPress={() => { }}>
            {!!leftHeaderAction.isIcon ? (
              <Icon name="chevron-left" size={18} style={{ color: 'black' }} />
            ) : (
              <Text style={commonStyles.headerTitle}> {leftHeaderAction.title} </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={ScreenHeaderStyles.centerItemWrapper}>
        <Text style={commonStyles.headerTitle}> {title} </Text>
      </View>
      <View style={ScreenHeaderStyles.rightItemWrapper}>
        {!!rightHeaderAction && (
          <TouchableOpacity onPress={rightHeaderAction.onPress}>
            {!!rightHeaderAction.isIcon ? (
              <Icon name="chevron-left" size={18} style={{ color: 'black' }} />
            ) : (
              <Text style={commonStyles.headerTitle}> {rightHeaderAction.title} </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default ScreenHeaderComponent;