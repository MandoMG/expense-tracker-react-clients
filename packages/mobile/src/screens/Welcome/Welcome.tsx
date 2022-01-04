import React, { useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import ButtonComponent from '../../components/buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAuthentication from '../../hooks/useAuthentication';

/*
   TODO: 
   - Email Registration
*/

const WelcomeScreen = () => {
   const [shouldShowModal, setShouldShowModal] = useState(false);
   const [shouldShowEmailSignIn, setShouldShowEmailSignIn] = useState(false);
   const {
      emailRef,
      handleEmailSignIn,
      handleTextChange,
      passwordRef,
      signInWithGoogle,
   } = useAuthentication();

   return (
      <View style={{ backgroundColor: '#4b6ee1', flex: 1 }}>
         <View>
            <Text>
               Expense Tracker
            </Text>
         </View>
         <View style={{ flexDirection: 'column-reverse', flex: 1, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
               <ButtonComponent buttonText="Account" onPress={() => setShouldShowModal(true)} isPrimary />
            </View>
         </View>
         {shouldShowModal && (
            <View style={{ position: 'absolute', left: '23%', top: '30%', flex: 1 }}>
               <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10 }}>
                  <TouchableOpacity onPress={() => setShouldShowModal(false)} style={{ flex: 1, position: 'absolute', right: '10%', top: '14%' }}>
                     <Icon name="times" size={20} style={{ color: '#5E6063' }} />
                  </TouchableOpacity>
                  <View style={{ alignItems: 'center', padding: 10 }}>
                     <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
                  </View>
                  <View style={{ paddingBottom: 10 }}>
                     <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10 }} onPress={signInWithGoogle}>
                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#4285F4' }}>
                           <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
                              <Icon name="google" size={20} style={{ color: '#000000' }} />
                           </View>
                           <View style={{ backgroundColor: '#4285F4', padding: 10 }}>
                              <Text style={{ color: '#FFFFFF' }}>{"Sign in with Google"}</Text>
                           </View>
                        </View>
                     </TouchableOpacity>
                     <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10 }} onPress={() => {
                        setShouldShowEmailSignIn(true)
                        setShouldShowModal(false)
                     }}>
                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#5E6063' }}>
                           <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
                              <Icon name="envelope" size={20} style={{ color: '#000000' }} />
                           </View>
                           <View style={{ backgroundColor: '#5E6063', padding: 10, flex: 1 }}>
                              <Text style={{ color: '#FFFFFF' }}>{"Sign in with Email"}</Text>
                           </View>
                        </View>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         )}
         {shouldShowEmailSignIn && (
            <View style={{ position: 'absolute', left: '23%', top: '30%', backgroundColor: 'white', width: '55%', borderRadius: 20 }}>
               <TouchableOpacity onPress={() => setShouldShowEmailSignIn(false)} style={{ flex: 1, position: 'absolute', right: '10%', paddingTop: 20 }}>
                  <Icon name="times" size={20} style={{ color: '#5E6063' }} />
               </TouchableOpacity>
               <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email Sign In</Text>
               </View>
               <View style={{ alignItems: 'flex-start', paddingHorizontal: 20, paddingBottom: 10 }}>
                  <TextInput placeholder="Email" onChangeText={text => handleTextChange(emailRef, text)} />
                  <TextInput placeholder="Password" onChangeText={text => handleTextChange(passwordRef, text)} secureTextEntry />
                  <View style={{ alignSelf: 'center', paddingTop: 10 }}>
                     <Button title="Log In" onPress={handleEmailSignIn} />
                     <View style={{ paddingTop: 10 }}>
                        <Text style={{ fontSize: 14 }}>{"Don't have an account?"}</Text>
                        <TouchableOpacity><Text style={{ fontSize: 14, textAlign: 'center', color: '#6060FF', textDecorationLine: 'underline' }}>{"Sign up"}</Text></TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         )}
      </View >
   )
};

export default WelcomeScreen;