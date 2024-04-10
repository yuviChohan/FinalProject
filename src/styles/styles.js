import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  display: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.1,
    marginLeft: 15,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    textAlign: 'right',
    fontSize: width * 0.07,
    backgroundColor: '#d0d8dd',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: height * 0.02,
  },
  button: {
    width: width * 0.2,
    height: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: width * 0.02,
    borderRadius: width * 0.02,
    backgroundColor: '#3498db',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
  },
});

export default styles;
