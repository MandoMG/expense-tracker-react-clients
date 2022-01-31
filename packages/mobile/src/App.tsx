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

const Tab = createBottomTabNavigator();

const getNavigatorIcon = (routeName: string) => {
  switch (routeName) {
    case 'Home':
      return <Icon name="home" size={20} />
    case 'Records':
      return <Icon name="file-alt" size={20} />
    case 'Categories':
      return <Icon name="list" size={20} />
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          return getNavigatorIcon(route.name);
        }
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Records" component={Records} />
        <Tab.Screen name="Categories" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
