import {StyleSheet} from 'react-native';
import Colors from './Colors';

const commonStyles = StyleSheet.create({
  flexOne: {flex: 1},
  flexRow: {flexDirection: 'row'},
  androidHeaderText: {fontSize: 20, color: Colors.black},
  iosHeaderText: {fontSize: 16, color: '#327af5'},
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  subheaderTitle: {
    color: Colors.black,
    fontSize: 22,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  boldText: {
    color: Colors.black,
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  listBottomPadding: {
    paddingBottom: 10,
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.pillBackground,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowOpacity: 0.1,
  },
  listItemSingleLineLeftColumn: {
    flex: 1,
    paddingVertical: 10,
  },
  listItemLeftColumn: {
    flex: 1,
  },
  listItemSingleLineRightColumn: {
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  listItemRightColumn: {
    alignItems: 'flex-end',
  },
  listWrapper: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 70,
  },
  listItemMainText: {color: Colors.black, fontWeight: 'bold', fontSize: 14},
  listItemSubText: {color: Colors.subTextGray},
  sectionTitle: {
    flex: 1,
    color: Colors.black,
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  sectionLink: {
    color: Colors.expenseOrange,
    fontSize: 15,
    flexWrap: 'wrap',
  },
});

export default commonStyles;
