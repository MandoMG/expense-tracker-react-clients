import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './screens/Home/Home';
import Records from './screens/Records/Records';
import Categories from './screens/Categories/Categories';
import Colors from './common/Colors';
import {useEffect} from 'react';
import {LogBox} from 'react-native';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

const getNavigatorIcon = (routeName: string, isActive: boolean) => {
  switch (routeName) {
    case 'Home':
      return (
        <Icon
          name="home"
          size={20}
          color={isActive ? Colors.expenseOrange : Colors.black}
        />
      );
    case 'Records':
      return (
        <Icon
          name="file-alt"
          size={20}
          color={isActive ? Colors.expenseOrange : Colors.black}
        />
      );
    case 'Categories':
      return (
        <Icon
          name="list"
          size={20}
          color={isActive ? Colors.expenseOrange : Colors.black}
        />
      );
  }
};

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,
            unmountOnBlur: true,
            tabBarActiveTintColor: Colors.expenseOrange,
            tabBarStyle: {backgroundColor: Colors.appBackground},
            tabBarIcon: ({focused}) => {
              return getNavigatorIcon(route.name, focused);
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Records" component={Records} />
          <Tab.Screen name="Categories" component={Categories} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
