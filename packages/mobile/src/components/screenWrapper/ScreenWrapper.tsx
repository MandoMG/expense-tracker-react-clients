import Colors from '../../common/Colors';
import {SafeAreaView, StyleSheet} from 'react-native';

interface ScreenWrapperProps {
  children: JSX.Element;
}

const ScreenWrapper = (props: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>{props.children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default ScreenWrapper;
