import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import NativeStackNavigator from './navigators/NativeStackNavigator';
import './redux/listeners';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
