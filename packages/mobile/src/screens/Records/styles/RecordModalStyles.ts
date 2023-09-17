import { StyleSheet } from "react-native";
import Colors from "../../../common/Colors";

export const RecordModalStyles = StyleSheet.create({
  inputTitle: {
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10
  },
  inputFieldWrapper: {
    marginTop: 8,
    backgroundColor: Colors.appBackground,
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 15
  },
  inputField: {
    borderColor: Colors.borderGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Colors.black
  },
  sliderWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10
  },
  sliderText: {
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5
  },
  sliderItemWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  },
  sliderItem: {
    marginTop: 3
  },
  pickerButtonText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

