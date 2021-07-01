/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './components/context';
import axios from 'axios';
import {TOKEN} from '@env';
import AsyncStorage from '@react-native-community/async-storage';

import {FormMasuk} from './src/screens/Autentikasi';
import {MainNavigator} from './navigations/tabs';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (username, password) => {
        const params = new FormData();
        params.append('username', username);
        params.append('password', password);
        params.append('token', TOKEN);

        axios
          .post(
            'http://sid.polibatam.ac.id/apilogin/web/api/auth/login',
            params,
            {
              headers: {
                'content-type': 'application/json',
              },
            },
          )
          .then(async (res) => {
            if (res.data.status !== 'error') {
              await AsyncStorage.multiSet([
                ['userToken', res.data.data.nim_nik_unit],
                ['userData', JSON.stringify(res.data.data)],
              ]);
              dispatch({
                type: 'LOGIN',
                id: res.data.data.id,
                token: res.data.data.nim_nik_unit,
                data: res.data.data,
              });
            } else {
              alert('Username / Password salah');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGIN'});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <MainNavigator />
        ) : (
          <Stack.Navigator
            initialRouteName="FormMasuk"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="FormMasuk" component={FormMasuk} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
