import { StyleSheet } from "react-native";

export const ScreenHeaderStyles = StyleSheet.create({
  leftItemWrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerItemWrapper: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItemWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
});

export const ModalHeaderStyles = StyleSheet.create({
  headerWrapper: { flexDirection: 'row', marginBottom: 8 },
  leftItemWrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerItemWrapper: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItemWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  sideItems: { color: 'black', fontSize: 16, flexWrap: 'wrap' },
  centerItem: { color: 'black', fontSize: 18, flexWrap: 'wrap', fontWeight: 'bold' }
});