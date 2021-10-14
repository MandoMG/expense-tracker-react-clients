import React from 'react';
import './App.css';
import { Button, Image, Text, View } from 'react-native-web';
import NavBar from './components/NavBar';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <View>
      <NavBar />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <NavigationMenu />
        </View>
        <View style={{ flex: 3 }}>
          <NavigationMenu />
        </View>
      </View>
    </View>
  );
}

export default App;
