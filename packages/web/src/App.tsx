import React from 'react';
import './App.css';
import { View } from 'react-native-web';
import NavBar from './components/NavBar';
import NavigationMenu from './components/NavigationMenu';
import CurrentBalanceInfo from './components/CurrentBalanceInfo';
import CurrentBudgetInfo from './components/CurrentBudgetInfo';

function App() {
  return (
    <View>
      <NavBar />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <NavigationMenu />
        </View>
        <View style={{ flex: 3 }}>
          <CurrentBalanceInfo />
          <CurrentBudgetInfo />
        </View>
      </View>
    </View>
  );
}

export default App;
