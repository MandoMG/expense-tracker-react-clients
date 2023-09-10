import React from 'react';
import {
  ActivityIndicator,
  Platform,
  useWindowDimensions,
  View,
} from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import BudgetSummary from './components/BudgetSummary';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHome from './hooks/useHome';
import {useSelector} from 'react-redux';
import {selectIsAppLoading} from '../../redux/slices/appSlice';
import Colors from '../../common/Colors';

const Home = () => {
  const {dashboardInfo} = useHome();
  const {height} = useWindowDimensions();
  const screenPercentage = Platform.OS === 'android' ? 0.62 : 0.54;
  const isLoading = useSelector(selectIsAppLoading);

  return !isLoading ? (
    <SafeAreaView>
      <View>
        <ScreenHeaderComponent
          title={dashboardInfo?.featureLabels.title || ''}
        />
        <CurrentDateSubtitle />
        <BalanceSummaryComponent
          currentBalance={dashboardInfo?.pillsData.currentBalance}
          income={dashboardInfo?.pillsData.income}
          expenses={dashboardInfo?.pillsData.expenses}
        />
        <View
          style={{
            height: height * screenPercentage,
          }}>
          <BudgetSummary summaryData={dashboardInfo?.budgetSummaryData} />
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={Colors.expenseOrange} />
    </View>
  );
};

export default Home;
