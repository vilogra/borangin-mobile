import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../../components/context';
import styles from './_formMasukStyle';
const logoPolibatam = require('./../../../assets/images/logopolibatam.png');

function FormMasuk() {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleLogin = (username, password) => {
    signIn(username, password);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <View style={styles.imageWrapper}>
            <Image source={logoPolibatam} style={styles.image} />
          </View>
          <View>
            <Text style={styles.headerText}>Selamat Datang!</Text>
            <Text style={styles.bodyText}>
              Silahkan gunakan username dan password learning anda
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.wrapTextInput}>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={(val) => textInputChange(val)}
                placeholder="Masukkan username learning"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.wrapTextInput}>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={(val) => handlePasswordChange(val)}
                placeholder="Masukkan password learning"
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.bodyText}>
            Tidak bisa login?{' '}
            <Text
              style={styles.underlineText}
              onPress={() => alert('Lupa password clicked')}>
              Lupa password
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              handleLogin(data.username, data.password);
            }}
            style={styles.buttonWrapper}>
            <View>
              <Text style={styles.textHeader}>Masuk</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FormMasuk;
