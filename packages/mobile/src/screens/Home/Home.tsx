import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import BudgetSummary from './components/BudgetSummary';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHome from './hooks/useHome';

const Home = () => {
   const { dashboardInfo } = useHome();
   const { height } = useWindowDimensions();

   return (
      <SafeAreaView>
         <View>
            <ScreenHeaderComponent title={dashboardInfo?.featureLabels.title || ''} />
            <CurrentDateSubtitle />
            <BalanceSummaryComponent
               currentBalance={dashboardInfo?.pillsData.currentBalance}
               income={dashboardInfo?.pillsData.income}
               expenses={dashboardInfo?.pillsData.expenses}
            />
            <View style={{
               height: height * .54,
            }}>
               <BudgetSummary summaryData={dashboardInfo?.budgetSummaryData} />
            </View>
         </View>
      </SafeAreaView>
   )
};

export default Home;