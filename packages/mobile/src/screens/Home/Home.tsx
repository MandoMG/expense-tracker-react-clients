import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import BudgetSummary from './components/BudgetSummary';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import {useSelector} from 'react-redux';
import {
  selectDashboardInfo,
  selectIsAppLoading,
} from '../../redux/slices/appSlice';
import Colors from '../../common/Colors';
import {useAppDispatch as useDispatch, useAppSelector} from '../../redux/hooks';
import {getDashboardInfo} from '../../redux/thunks/dashboardThunks';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import Summary from './components/Summary';
import RecordSummary from './components/RecordSummary';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAppLoading);
  const dashboardInfo = useAppSelector(selectDashboardInfo);

  // fetches only on mount, but need to prevent stale data
  useEffect(() => {
    if (!dashboardInfo) {
      dispatch(getDashboardInfo());
    }
  }, []);

  return !isLoading ? (
    <ScreenWrapper>
      <View>
        <CurrentDateSubtitle />
        <Summary
          balance={dashboardInfo?.summaryData.currentBalance}
          income={dashboardInfo?.summaryData.income}
          expenses={dashboardInfo?.summaryData.expenses}
        />
        <ScrollView>
          <BudgetSummary summaryData={dashboardInfo?.budgetSummaryData} />
          <RecordSummary summaryData={dashboardInfo?.recordSummaryData} />
        </ScrollView>
      </View>
    </ScreenWrapper>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={Colors.expenseOrange} />
    </View>
  );
};

export default Home;
