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
        .get(`http://localhost:3000/borang?nim_nik_unit=${token}`)
        .then((res) => {
          if (res.data !== []) {
            setData(res.data[0].request);
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
    return <Notification key={result.id} type={result.status} id={result.id} />;
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
          <View></View>
          <Text style={styles.textHeader}>Notifikasi</Text>
          <View></View>
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
