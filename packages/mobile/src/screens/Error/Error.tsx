import { View, Text, Pressable } from "react-native"
import ScreenWrapper from "../../components/screenWrapper/ScreenWrapper"
import { useEffect, useState } from "react";
import Colors from "../../common/Colors";

const errorMessages: string[] = [
  "Even apps have bad days. Tap to try again!",
  "There was a disturbance in the force. Please try again",
  "Our bad. Tap Retry to give it another shot!",
  "Whoopsie daisy! Hit retry and let's fix this.",
  "Glitch in the matrix. Give it another go!"
]


const ErrorScreen = () => {
  const [currentMessage, setCurrentMessage] = useState<string>();

  const getErrorMessage = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    setCurrentMessage(errorMessages[randomIndex])
  };

  useEffect(() => {
    getErrorMessage();
  }, [])

  return (
    <ScreenWrapper>
      <View style={{ alignContent: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{
          color: Colors.black,
          textAlign: "center",
          fontSize: 24,
          flexWrap: 'wrap',
          fontWeight: 'bold',
          paddingBottom: 16
        }}> Oops! </Text>
        <Text style={{
          color: Colors.black,
          textAlign: "center",
          fontSize: 16,
          flexWrap: 'wrap',
        }}> {currentMessage} </Text>
        <Pressable onPress={getErrorMessage} style={{ backgroundColor: Colors.expenseOrange, marginTop: 16, borderRadius: 20, marginHorizontal: "35%", paddingVertical: 8 }}>
          <Text style={{
            color: Colors.white,
            textAlign: "center",
            fontSize: 16,
            flexWrap: 'wrap',
          }}> Retry </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  )
}

export default ErrorScreen;