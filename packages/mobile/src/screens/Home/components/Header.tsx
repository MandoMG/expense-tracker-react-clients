import React from 'react';
import { ImageBackground, Text, useWindowDimensions, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import CategoryList from './CategoryList';

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
            <View style={{
               paddingTop: 20,
               alignItems: 'center',
               justifyContent: 'center',
            }}>
               <Text style={{ color: 'white', fontSize: 18 }}> Dashboard </Text>
            </View>
            <View style={{
               paddingTop: 10,
               paddingLeft: 20,
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
            }}>
               <Text style={{ color: 'white', fontSize: 14 }}> Current Balance </Text>
               <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(1420.69)}</Text>
            </View>
            <View style={{
               paddingTop: 10,
               paddingHorizontal: 20,
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
               flexDirection: 'row'
            }}>
               <View style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
               }}>
                  <Text style={{ color: 'white', fontSize: 14 }}> Income </Text>
                  <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(2000.00)}</Text>
               </View>
               <View style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
               }}>
                  <Text style={{ color: 'white', fontSize: 14 }}> Income </Text>
                  <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(579.31)}</Text>
               </View>
            </View>
            <CategoryList />
         </ImageBackground>
      </View>
   )
}

export default HomeHeader;