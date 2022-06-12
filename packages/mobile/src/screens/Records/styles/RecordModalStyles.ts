import { StyleSheet } from "react-native";

export const RecordModalStyles = StyleSheet.create({
  inputTitle: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10
  },
  inputFieldWrapper: {
    marginTop: 8,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 15
  },
  inputField: {
    borderColor: '#505050',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  sliderWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10
  },
  sliderText: {
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

