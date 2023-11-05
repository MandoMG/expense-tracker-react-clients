import React from 'react';
import {View} from 'react-native';
import Tile from '../../../components/tile/Tile';
import Colors from '../../../common/Colors';

interface BudgetSummaryProps {
  balance?: number;
  income?: number;
  expenses?: number;
}

const Summary = ({
  balance = 0,
  income = 0,
  expenses = 0,
}: BudgetSummaryProps) => {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
      <Tile
        label="Balance"
        value={balance}
        backgroundColor={Colors.darkPurple}
      />
      <Tile
        label="Income"
        value={income}
        backgroundColor={Colors.incomePurple}
      />
      <Tile
        label="Expenses"
        value={expenses}
        backgroundColor={Colors.expenseOrange}
      />
    </View>
  );
};

export default Summary;
