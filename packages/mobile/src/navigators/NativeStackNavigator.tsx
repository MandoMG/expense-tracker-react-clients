import React from 'react';
import Home from '../screens/Home/Home';
import Records from '../screens/Records/Records';
import Budgets from '../screens/Categories/Budgets';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome/Welcome';
import PreviousMonthData from "../screens/Records/screens/PreviousMonthData";

type NativeStackParamList = {
  Dashboard: undefined;
  Records: undefined;
  PreviousMonths: undefined;
  Budgets: undefined;
  AddEditRecord: undefined;
  SignIn: undefined;
};

export type ScreenNames = keyof NativeStackParamList;

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'Dashboard'
>;

export type RecordScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'Records'
>;

export type BudgetScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'Budgets'
>;
const Stack = createNativeStackNavigator<NativeStackParamList>();

const NativeStackNavigator = () => {
  const isUserSignedIn = true;
  // const isUserSignedIn = useSelector(selectIsUserSignedIn);

  return (
    <Stack.Navigator>
      {isUserSignedIn ? (
        <>
          <Stack.Screen
            name="Dashboard"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Records" component={Records} />
          <Stack.Screen name="PreviousMonths" component={PreviousMonthData} />
          <Stack.Screen name="Budgets" component={Budgets} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={WelcomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;
