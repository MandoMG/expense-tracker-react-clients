import React from 'react';
import { View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import BudgetSummary from './components/BudgetSummary';

const currentBalance = 1420.69;
const income = 2000.00;
const expenses = 579.31;

const Home = () => {
   return (
      <View>
         <ScreenHeaderComponent title="Dashboard" />
         <BalanceSummaryComponent currentBalance={currentBalance} income={income} expenses={expenses} />
         <View style={{
            height: '58%',
         }}>
            <BudgetSummary />
         </View>
      </View>
   )
};

export default Home;