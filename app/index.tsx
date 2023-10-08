import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from '@rneui/themed';
import { DB } from '../service/firebaseConnection';

export default function App() {

  const db = DB;

  return (
    <View style={styles.container}>
      <View style={styles.topDiv}>
        {/* Your content for the top div */}
        <Text>Top Div Content</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button Text</Text>
      </TouchableOpacity>

      <View style={styles.bottomDiv}>
        {/* Additional divs below the button */}
        <View style={styles.subDiv}>
          <Text>Sub Div 1</Text>
        </View>
        <View style={styles.subDiv}>
          <Text>Sub Div 2</Text>
        </View>
      </View>

      <View style={styles.actionCont}>  
        <FAB
          visible={true}
          icon={{ name: 'add', color: 'white' }}
          size='large'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 200, // Adjust the height as needed (20rem equivalent)
    padding: 20, // Add padding for spacing
  },
  topDiv: {
    // Styles for the top div
    marginBottom: 10, // Add margin to separate from the button
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue', // Button background color
    padding: 10, // Button padding
    borderRadius: 5, // Button border radius for rounded corners
  },
  buttonText: {
    color: 'white', // Button text color
    fontWeight: 'bold', // Button text style
    textAlign: 'center', // Center the text horizontally
  },
  bottomDiv: {
    marginTop: 10, // Add margin to separate from the button
  },
  subDiv: {
    // Styles for the additional divs (sub-divs)
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },



  actionCont: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
