import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../components/context';
import styles from './_pengaturanStyle';

function Pengaturan() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View></View>
        <Text style={styles.textHeader}>Pengaturan</Text>
        <View style={styles.arrow}></View>
      </View>
      <View style={styles.headerWrapper}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => signOut()}
            style={styles.buttonWrapper}>
            <View>
              <Text style={styles.textHeader}>Keluar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Pengaturan;
