import { StyleSheet, Text, View } from 'react-native-web';

const CurrentBalanceInfo = () => {
   return (
      <View style={{ margin: 20, borderColor: '#000', borderWidth: 1, borderRadius: 10, padding: 15, flexDirection: 'row' }}>
         <View style={{ flex: 1 }}>
            <Text>Current Balance</Text>
            <Text style={styles.sectionValue}>$1420.69</Text>
         </View>
         <View style={{ alignItems: 'flex-end', marginLeft: 15 }}>
            <Text>Income</Text>
            <Text style={styles.sectionValue}>$2000.00</Text>
         </View>
         <View style={{ alignItems: 'flex-end', marginLeft: 15 }}>
            <Text>Expense</Text>
            <Text style={styles.sectionValue}>$579.31</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   sectionValue: {
      fontSize: 20,
      fontWeight: 'bold'
   }
});

export default CurrentBalanceInfo;