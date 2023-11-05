import { Platform, StyleSheet } from "react-native";

const categoryListPaddingBottom = Platform.OS === "android" ? 60 : 60;

const CategoryStyles = StyleSheet.create({
  categoryListWrapper: { marginHorizontal: 20, paddingBottom: categoryListPaddingBottom }
});

export default CategoryStyles;
