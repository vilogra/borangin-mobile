/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './store';
import {FormMasuk} from './src/screens/Autentikasi';
import {FormPeminjaman} from './src/screens/Peminjaman';
import {Dashboard} from './src/screens/Dashboard';
import {Linimasa} from './src/screens/Linimasa';


const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FormMasuk"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="FormMasuk" component={FormMasuk} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="FormPeminjaman" component={FormPeminjaman} />
          <Stack.Screen name="Linimasa" component={Linimasa} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
