import React from 'react';
import Home from '../screens/Home/Home';
import Records from '../screens/Records/Records';
import Budgets from '../screens/Categories/Budgets';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome/Welcome';
import PreviousMonthData from '../screens/History/screens/PreviousMonthData';
import PreviousMonthRecords from '../screens/History/screens/PreviousMonthRecords';
import History from '../screens/History/History';
import PreviousCategoryComparison from '../screens/History/screens/PreviousCategoryComparison';

type NativeStackParamList = {
  AddEditRecord: undefined;
  Budgets: undefined;
  Dashboard: undefined;
  History: undefined;
  PreviousMonths: undefined;
  PreviousMonthsRecords: undefined;
  PreviousCategoryComparison: undefined;
  Records: undefined;
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
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      {isUserSignedIn ? (
        <>
          <Stack.Screen
            name="Dashboard"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Records" component={Records} />
          <Stack.Screen
            name="PreviousMonths"
            options={{title: 'Previous Record Summary'}}
            component={PreviousMonthData}
          />
          <Stack.Screen
            name="PreviousMonthsRecords"
            options={{title: 'Previous Months Records'}}
            component={PreviousMonthRecords}
          />
          <Stack.Screen
            name="PreviousCategoryComparison"
            options={{title: 'Previous Category Comparison'}}
            component={PreviousCategoryComparison}
          />
          <Stack.Screen name="Budgets" component={Budgets} />
          <Stack.Screen name="History" component={History} />
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
