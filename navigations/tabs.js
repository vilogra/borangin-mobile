import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../src/screens/Dashboard';
import {Notifikasi} from '../src/screens/Notifikasi';
import {FormPeminjaman} from '../src/screens/Peminjaman';
import {Linimasa} from '../src/screens/Linimasa';
import {Pengaturan} from '../src/screens/Pengaturan';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../src/utils/constant/color';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: colors.P1,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={require('./../assets/images/home-alt.png')}
                resizeMode="contain"
                style={{width: 32, height: 32}}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="notifikasi"
        component={Notifikasi}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={require('./../assets/images/notification-alt.png')}
                resizeMode="contain"
                style={{width: 32, height: 32}}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="formPeminjaman"
        component={FormPeminjaman}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/images/date-alt-add.png')}
              resizeMode="contain"
              style={{width: 32, height: 32}}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarVisible: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="linimasa"
        component={Linimasa}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={require('./../assets/images/date-question.png')}
                resizeMode="contain"
                style={{width: 32, height: 32}}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="pengaturan"
        component={Pengaturan}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={require('./../assets/images/settings-alt.png')}
                resizeMode="contain"
                style={{width: 32, height: 32}}
              />
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} mode="modal">
      <Stack.Screen name="Dashboard" component={Tabs} />
      <Stack.Screen name="Notifikasi" component={Tabs} />
      <Stack.Screen name="FormPeminjaman" component={Tabs} />
      <Stack.Screen name="Linimasa" component={Tabs} />
      <Stack.Screen name="Pengaturan" component={Tabs} />
    </Stack.Navigator>
  );
};

export {Tabs, MainNavigator};
