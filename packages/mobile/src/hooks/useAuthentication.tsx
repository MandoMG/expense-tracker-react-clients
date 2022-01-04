import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert, AlertButton } from 'react-native';

const useAuthentication = () => {
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState<boolean>(true);
   const [user, setUser] = useState<FirebaseAuthTypes.User>();
   const emailRef = useRef('');
   const passwordRef = useRef('');

   const createUserWithEmail = async () => {
      try {
         await auth().createUserWithEmailAndPassword(emailRef.current, emailRef.current)
         console.log('User account created & signed in!');
      } catch (error: any) {
         if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
         }

         if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
         }

         console.error(error);
      }
   }

   const signInWithEmail = async () => {
      await auth().signInWithEmailAndPassword('mando.mg.92@gmail.com', 'passw0rd');
   };

   const signInWithGoogle = async () => {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
   }

   const handleTextChange = (elementRef: MutableRefObject<string>, text?: string) => {
      if (!text) {
         return;
      }

      elementRef.current = text;
   };

   const handleEmailSignIn = async () => {
      try {
         await signInWithEmail()
      } catch (error: any) {
         if (error.code === 'auth/user-not-found') {
            const cancelButton = {
               text: 'Cancel',
               onPress: () => { console.log('Operation Cancelled!') }
            }
            const registerButton = {
               text: 'Register',
               onPress: () => { console.log('Let the registration begin!') }
            }
            const buttons: AlertButton[] = [cancelButton, registerButton];
            Alert.alert('User not found', 'The email you entered was not found, do you want to sign up?', buttons);
         }
      }
   }

   const logOut = () => {
      try {
         GoogleSignin.signOut();
         auth().signOut();
         console.log('User signed out');
      } catch (error) {
         console.error(error);
      }
   }

   // Handle user state changes
   const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
      if (!user) {
         return;
      }

      setUser(user);
      console.log('User', user)
      if (initializing) setInitializing(false);
   }

   useEffect(() => {
      GoogleSignin.configure({
         webClientId: '135182207290-rf1tgps7a9ildf1pm0822fir0q7ct119.apps.googleusercontent.com'
      });

      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
   }, []);

   return {
      createUserWithEmail,
      emailRef,
      handleEmailSignIn,
      handleTextChange,
      initializing,
      logOut,
      passwordRef,
      signInWithEmail,
      signInWithGoogle,
      user
   }
};

export default useAuthentication;