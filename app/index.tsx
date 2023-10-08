import { getDatabase, ref, set, push, update, remove } from "firebase/database";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firebaseConnection } from "../service/firebaseConnection";

export default function App() {
    const db = getDatabase(firebaseConnection);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text>Button Text</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end'
  }
});
