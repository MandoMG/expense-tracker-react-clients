import React from 'react';
import { ImageBackground, Text, useWindowDimensions, View } from 'react-native';
import CategoryList from './CategoryList';
import BalanceSummaryComponent from '../../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../../components/headers/ScreenHeader';

const HomeHeader = () => {
   const { height } = useWindowDimensions();

   return (
      <View style={{ width: '100%', height: height * .65 }}>
         <ImageBackground
            source={require('../../../assets/header-background.png')}
            resizeMode="cover"
            imageStyle={{ borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
            style={{
               flex: 1,
            }}
         >
            <ScreenHeaderComponent title='Dashboard' />
            <View>
               <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
            </View>
            <CategoryList />
         </ImageBackground>
      </View>
   )
}

export default HomeHeader;