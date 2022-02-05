import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
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
  listItemRightColumn: {
    alignItems: 'flex-end'
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  }
});

export default commonStyles;