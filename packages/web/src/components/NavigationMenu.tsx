import { Text, View } from 'react-native-web';

const NavigationMenu = () => {
   const menuItems = ['Dashboard', 'Records', 'Categories', 'Budget'];

   return (
      <View style={{ margin: 20, borderColor: '#000', borderWidth: 1, borderRadius: 10, padding: 15 }}>
         {menuItems && menuItems.map(item => (
            <Text style={{ marginVertical: 10 }} key={`${item.toLowerCase()}-item`}>{item}</Text>
         ))}
      </View>
   )
}

export default NavigationMenu;