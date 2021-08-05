import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import Notification from './Notification';
import styles from './_notifikasiStyle';

function Notifikasi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const token = await AsyncStorage.getItem('userToken');
      axios
        // .get(`http://localhost:3004/borang?nim_nik_unit=${token}`)
        .get(`https://peminjaman-ruangan-api.herokuapp.com/loans/user/${token}`)
        .then((res) => {
          if (res.data !== []) {
            setData(res.data);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAllData();
  }, []);

  const wrapData = data.map((result) => {
    return (
      <Notification key={result._id} type={result.status} id={result._id} />
    );
  });

  const noData = (
    <View>
      <Text>Kamu belum mengajukan peminjaman.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View />
          <Text style={styles.textHeader}>Notifikasi</Text>
          <View />
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.textSection}>Notifikasi</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.notificationWrapper}>
            {data.length !== 0 ? wrapData : noData}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Notifikasi;
