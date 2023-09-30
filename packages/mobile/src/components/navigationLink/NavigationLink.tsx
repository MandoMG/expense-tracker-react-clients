import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import commonStyles from '../../common/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../common/Colors';
import {useNavigation} from '@react-navigation/native';
import {DashboardScreenNavigationProp, ScreenNames} from "../../navigators/NativeStackNavigator";

interface NavigationLinkProps {
  label: string;
  route: ScreenNames;
}

const NavigationLink = ({route, label}: NavigationLinkProps) => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const handleOnPress = () => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={handleOnPress}>
      <Text style={commonStyles.sectionLink}>{ label }</Text>
      <Icon
        style={{paddingTop: 4, paddingLeft: 4, color: Colors.expenseOrange}}
        name="chevron-right"
      />
    </TouchableOpacity>
  );
};

export default NavigationLink;
