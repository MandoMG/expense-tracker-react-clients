import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  flexOne: { flex: 1 },
  listBottomPadding: {
    paddingBottom: 10
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#dadada',
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listItemSingleLineLeftColumn: {
    flex: 1,
    paddingVertical: 10
  },
  listItemLeftColumn: {
    flex: 1,
  },
  listItemSingleLineRightColumn: {
    alignItems: 'flex-end',
    paddingVertical: 10
  },
  listItemRightColumn: {
    alignItems: 'flex-end'
  },
  listWrapper: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15
  },
  listItemMainText: { color: Colors.black, fontWeight: 'bold', fontSize: 14 },
  listItemSubText: { color: Colors.subTextGray },
  sectionTitle: {
    color: Colors.black,
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  }
});

export default commonStyles;