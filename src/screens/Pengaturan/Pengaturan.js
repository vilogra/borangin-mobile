import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../components/context';
import colors from '../../utils/constant/color';
import styles from './_pengaturanStyle';

function Pengaturan() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{backgroundColor: colors.P1}}>
      <View style={styles.container}>
        <View></View>
        <Text style={styles.textHeader}>Pengaturan</Text>
        <View></View>
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
