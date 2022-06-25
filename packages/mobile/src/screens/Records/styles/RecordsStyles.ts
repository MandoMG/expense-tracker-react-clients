import { Platform, StyleSheet } from "react-native";

const budgetListPaddingBottom = Platform.OS === "android" ? 55 : 15;

export const RecordGraphsStyles = StyleSheet.create({
  graphSectionWrapper: { marginHorizontal: 20, marginTop: 20 },
  graphFlatListContainer: { paddingHorizontal: 15, paddingTop: 20, paddingBottom: budgetListPaddingBottom },
  graphFlatListItemWrapper: { paddingVertical: 5, paddingHorizontal: 7 }
});
