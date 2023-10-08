import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { DB } from '../service/firebaseConnection';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';

// web: 251635948730-puag82rtd64jivf5h6fp56f1d9sh2ve8.apps.googleusercontent.com
// iOS: 251635948730-qqufpsqma7n3o0l7rcf886boa5949uha.apps.googleusercontent.com
// And: 251635948730-s8moank2vubsloq8mvmfjr9ggvdlkaaa.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setuser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "251635948730-puag82rtd64jivf5h6fp56f1d9sh2ve8.apps.googleusercontent.com",
    iosClientId: "251635948730-qqufpsqma7n3o0l7rcf886boa5949uha.apps.googleusercontent.com",
    androidClientId: "251635948730-s8moank2vubsloq8mvmfjr9ggvdlkaaa.apps.googleusercontent.com"
  });

  const db = DB;

  React.useEffect(() => {
    if (response?.type === "success"){
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers:
        { Authorization: `Bearer ${accessToken}` }  
      });
      const useInfo = await response.json();
      setuser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Bem-vindo</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Seja bem-vindo(a)</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Faça seu login</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}>
          <Image source={require("../assets/btn_google.png")} style={{width: 300, height: 40}} />
        </TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
