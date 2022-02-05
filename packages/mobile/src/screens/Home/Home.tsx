import React from 'react';
import HomeHeader from "./components/Header";
import { Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import BudgetSummary from './components/BudgetSummary';

const OldHome = () => {
   return (
      <View>
         <HomeHeader />
      </View>
   )
};

const currentBalance = 1420.69;
const income = 2000.00;
const expenses = 579.31;

const Home = () => {
   return (
      <View>
         <ScreenHeaderComponent title="Dashboard" />
         <View>
            <View style={[{
               backgroundColor: '#323246',
               marginTop: 20,
               marginHorizontal: 20,
               borderRadius: 25,
               elevation: 50,
            }]}>
               <View style={{
                  paddingVertical: 15,
                  paddingLeft: 20,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
               }}>
                  <Text style={{ color: 'white', fontSize: 14 }}> Current Balance </Text>
                  <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>{TextUtil.formatCurrency(currentBalance, 0)}</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
               <View style={[{
                  flex: 1,
                  backgroundColor: '#8132ff',
                  marginRight: 10,
                  marginTop: 20,
                  borderRadius: 25,
                  elevation: 20,
               }]}>
                  <View style={{
                     paddingVertical: 15,
                     paddingHorizontal: 15,
                     alignItems: 'flex-start',
                     justifyContent: 'flex-start',
                  }}>
                     <Text style={{ color: 'white', fontSize: 14 }}> Income </Text>
                     <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(income, 0)}</Text>
                  </View>
               </View>
               <View style={[{
                  flex: 1,
                  backgroundColor: '#ff6937',
                  marginLeft: 10,
                  marginTop: 20,
                  borderRadius: 25,
                  elevation: 20,
               }]}>
                  <View style={{
                     paddingVertical: 15,
                     paddingHorizontal: 15,
                     alignItems: 'flex-start',
                     justifyContent: 'flex-start',
                  }}>
                     <Text style={{ color: 'white', fontSize: 14 }}> Expenses </Text>
                     <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(expenses, 0)}</Text>
                  </View>
               </View>
            </View>
         </View>
         <View style={{
            height: '58%',
         }}>
            <BudgetSummary />
         </View>
      </View>
   )
};

export default Home;