import {FlatList, Text, View} from 'react-native';
import ScreenWrapper from '../../../components/screenWrapper/ScreenWrapper';
import commonStyles from '../../../common/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/Colors';
import React, {useEffect} from 'react';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../../redux/hooks';
import {selectPreviousMonthsData} from '../../../redux/slices/recordSlice';
import {getPreviousMonthsInfo} from '../../../redux/thunks/recordsThunks';
import {useDateUtil} from 'mandomg-expensetracker-common/src/hooks';

interface PreviousMonthItemProps {
  monthYear: string;
  balance: number;
  income: number;
  expense: number;
}

const PreviousMonthItem = (props: PreviousMonthItemProps) => {
  const {balance, expense, income, monthYear} = props;

  return (
    <View style={[commonStyles.listItemWrapper, {flexDirection: 'column'}]}>
      <Text style={commonStyles.listItemMainText}>{monthYear}</Text>
      <View style={{paddingTop: 8}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon
            name="circle"
            size={8}
            style={{color: Colors.darkPurple, alignSelf: 'center'}}
            solid
          />
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 6}}>
            Balance
          </Text>
          <Text style={{flex: 1, textAlign: 'right'}}>
            {TextUtil.formatCurrency(balance, 0)}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon
            name="circle"
            size={8}
            style={{color: Colors.incomePurple, alignSelf: 'center'}}
            solid
          />
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 6}}>
            Income
          </Text>
          <Text style={{flex: 1, textAlign: 'right'}}>
            {TextUtil.formatCurrency(income, 0)}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon
            name="circle"
            size={8}
            style={{color: Colors.expenseOrange, alignSelf: 'center'}}
            solid
          />
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 6}}>
            Expense
          </Text>
          <Text style={{flex: 1, textAlign: 'right'}}>
            {TextUtil.formatCurrency(expense, 0)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const PreviousMonthData = () => {
  const dispatch = useDispatch();
  const {isTimestampValid} = useDateUtil();
  const {previousMonthsInfo, timestamp} = useSelector(selectPreviousMonthsData);

  useEffect(() => {
    if (!isTimestampValid(timestamp)) {
      dispatch(getPreviousMonthsInfo());
    }
  }, []);

  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 20}}>
        <FlatList
          data={previousMonthsInfo}
          renderItem={({item}) => <PreviousMonthItem {...item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default PreviousMonthData;
