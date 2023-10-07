import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/f4c0d317a120fcdc47a5',
  };

export default function App() {

    const [request, response, signInWithGithub] = useAuthRequest(
        {
          clientId: 'f4c0d317a120fcdc47a5',
          scopes: ['identity'],
          redirectUri: makeRedirectUri({
            scheme: 'pedraMouraMobile'
          }),
        },
        discovery
      );

      useEffect(() => {
        if (response?.type === 'success') {
          const { code } = response.params;
        }
      }, [response]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
