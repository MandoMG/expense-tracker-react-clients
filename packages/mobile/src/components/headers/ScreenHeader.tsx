import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface HeaderProps {
  leftHeaderAction?: () => void;
  title: string;
  rightHeaderItem?: any;
}

const ScreenHeaderComponent = (props: HeaderProps) => {
  const { leftHeaderAction, title, rightHeaderItem } = props;
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{
        flex: 1,
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        {!!leftHeaderAction && (
          <Icon name="chevron-left" size={18} style={{ color: 'black' }} onPress={leftHeaderAction} />
        )}
      </View>
      <View style={{
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ color: 'black', fontSize: 18, flexWrap: 'wrap', fontWeight: 'bold' }}> {title} </Text>
      </View>
      <View style={{
        flex: 1,
        paddingTop: 20,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        {!!rightHeaderItem && (
          <Icon name="chevron-left" size={18} style={{ color: 'black' }} />
        )}
      </View>
    </View>
  )
}

export default ScreenHeaderComponent;