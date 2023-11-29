import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../../../common/Colors";
import React from "react";

const mockData = [
  {name: 'Restaurants', amount: 210.56},
  {name: 'Credit', amount: 102.85},
  {name: 'Miscellaneous', amount: 123.57},
];

interface WarningStatusListProps {
  name: string;
  amount: number;
}

const GoodStatus = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Budget Summary</Text>
      <Text style={{paddingTop: 8}}>All good! Keep the good habits!</Text>
    </View>
  );
};

const WarningStatusList = ({name, amount}: WarningStatusListProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Icon name="circle" size={8} style={{ color: Colors.black, alignSelf: "center" }} solid />
        <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 6}}>{name}</Text>
      </View>
      <Text style={{flex: 1, textAlign: 'right'}}>{amount}</Text>
    </View>
  );
};

const WarningStatus = () => {
  return (
    <View style={commonStyles.flexOne}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Budget Summary</Text>
      <Text style={{paddingVertical: 8}}>You went over on these categories:</Text>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <WarningStatusList name={item.name} amount={item.amount} />
        )}
      />
    </View>
  );
};

const hasGoodStatus = true;

const BudgetWidget = () => {
  return (
    <View
      style={[
        commonStyles.listItemWrapper,
        {marginHorizontal: 20, marginBottom: 10},
      ]}>
      {hasGoodStatus ? <GoodStatus /> : <WarningStatus />}
    </View>
  );
};

export default BudgetWidget;
