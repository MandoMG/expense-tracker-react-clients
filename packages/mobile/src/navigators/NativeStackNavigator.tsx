import React from 'react';
import Home from '../screens/Home/Home';
import Records from '../screens/Records/Records';
import Budgets from '../screens/Categories/Budgets';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';

type NativeStackParamList = {
  Dashboard: undefined;
  Records: undefined;
  Budgets: undefined;
};

export type ScreenNames = keyof NativeStackParamList;

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'Dashboard'
>;

const Stack = createNativeStackNavigator<NativeStackParamList>();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Records" component={Records} />
      <Stack.Screen name="Budgets" component={Budgets} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;
