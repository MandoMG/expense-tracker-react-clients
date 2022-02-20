import React from 'react';
import { View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import BudgetSummary from './components/BudgetSummary';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';

const currentBalance = 1420.69;
const income = 2000.00;
const expenses = 579.31;

const Home = () => {
   return (
      <View>
         <ScreenHeaderComponent title="Dashboard" />
         <CurrentDateSubtitle />
         <BalanceSummaryComponent currentBalance={currentBalance} income={income} expenses={expenses} />
         <View style={{
            height: '56%',
         }}>
            <BudgetSummary />
         </View>
      </View>
   )
};

export default Home;