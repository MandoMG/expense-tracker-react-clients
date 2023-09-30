import React from 'react';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import {useDateUtil} from 'mandomg-expensetracker-common/src/hooks';
import {Record} from '../../../types';
import NavigationLink from "../../../components/navigationLink/NavigationLink";

interface RecordSummaryProps {
  summaryData?: Record[];
}

interface RecordItemProps {
  item: Record;
}

const RecordSummaryItem = ({item}: RecordItemProps) => {
  const {constructDateStringFromDateObject} = useDateUtil();
  const date = new Date(item.recordDate);

  return (
    <View style={commonStyles.listItemWrapper}>
      <View style={commonStyles.listItemLeftColumn}>
        <Text style={commonStyles.listItemMainText}>{item.description}</Text>
        <Text style={commonStyles.listItemSubText}>
          {constructDateStringFromDateObject(date)}
        </Text>
      </View>
      <View style={commonStyles.listItemRightColumn}>
        <Text style={commonStyles.listItemMainText}>
          {TextUtil.formatCurrency(item.amount)}
        </Text>
        <Text style={commonStyles.listItemSubText}>{item.category}</Text>
      </View>
    </View>
  );
};

const RecordSummary = ({summaryData}: RecordSummaryProps) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View>
        <View style={{ flexDirection: "row"}}>
          <Text style={commonStyles.sectionTitle}> Last 7 Days </Text>
          <NavigationLink label="Go to Records" route="Records" />
        </View>
        <FlatList
          data={summaryData}
          renderItem={({item}) => <RecordSummaryItem item={item} />}
        />
      </View>
    </View>
  );
};

export default RecordSummary;
