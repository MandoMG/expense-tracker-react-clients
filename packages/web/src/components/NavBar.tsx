import { Image, Text, View } from 'react-native-web';
import profilePicture from '../assets/test_profile_picture.jpg';

const NavBar = () => {
   return (
      <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 25, flexDirection: 'row' }}>
         <View style={{ flex: 1, alignContent: 'flex-start' }}>
            <Text>Expense Tracker (Spese)</Text>
         </View>
         <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image source={{ uri: profilePicture }} style={{ height: 32, width: 32, borderRadius: 10 }} />
         </View>
      </View>
   )
}

export default NavBar;