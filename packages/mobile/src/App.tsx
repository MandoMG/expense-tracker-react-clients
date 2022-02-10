/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './screens/Home/Home';
import Records from './screens/Records/Records';
import Categories from './screens/Categories/Categories';
import Colors from './common/Colors';

const Tab = createBottomTabNavigator();

const getNavigatorIcon = (routeName: string, isActive: boolean) => {
  switch (routeName) {
    case 'Home':
      return <Icon name="home" size={20} color={isActive ? Colors.expenseOrange : Colors.black} />
    case 'Records':
      return <Icon name="file-alt" size={20} color={isActive ? Colors.expenseOrange : Colors.black} />
    case 'Categories':
      return <Icon name="list" size={20} color={isActive ? Colors.expenseOrange : Colors.black} />
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.expenseOrange,
        tabBarIcon: ({ focused }) => {
          return getNavigatorIcon(route.name, focused);
        }
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Records" component={Records} />
        <Tab.Screen name="Categories" component={Categories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
