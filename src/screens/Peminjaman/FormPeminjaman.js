import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../utils/constant/color';

import styles from './_formPeminjamanStyle';
const arrowLeft = require('./assets/arrowLeft.png');

function FormPeminjaman({navigation}) {
  const [userData, setUserData] = useState({id: null, name: ''});

  const [namaKegiatan, ubahNamaKegiatan] = useState('');
  const [namaPengaju, ubahNamaPengaju] = useState('');
  const [noHpPengaju, ubahNoHpPengaju] = useState('');
  const [penanggungJawab, ubahPenanggungJawab] = useState('');
  const [pendampingAcara, ubahPendampingAcara] = useState('');
  const [pengarahKegiatan, ubahPengarahKegiatan] = useState('');
  const [jumlahTamu, ubahJumlahTamu] = useState('');
  const [sifat, ubahSifat] = useState('Acara Politeknik');
  const [jenis, ubahJenis] = useState('Presentasi Profil');
  const [keterangan, ubahKeterangan] = useState('');

  useEffect(() => {
    setTimeout(async () => {
      try {
        setUserData(JSON.parse(await AsyncStorage.getItem('userData')));
      } catch (e) {
        console.log(e);
      }
    }, 5000);
    ubahNamaPengaju(userData.name);
    ubahNoHpPengaju(userData.notelp);
  }, []);

  const submitForm = () => {
    if (!!namaKegiatan && !!namaPengaju && !!noHpPengaju) {
      alert(`${namaKegiatan}, ${namaPengaju}, ${noHpPengaju}`);
    } else {
      alert('Isi form terlebih dahulu');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.arrow} source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Peminjaman</Text>
            <View style={styles.arrow}></View>
          </View>
          <View style={styles.headerWrapper}>
            <Text style={styles.textSection}>Pengajuan Peminjaman</Text>
          </View>
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Nama Kegiatan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNamaKegiatan}
                placeholder="Masukkan nama kegiatan"
                value={namaKegiatan}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Penanggung Jawab*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahPenanggungJawab}
                placeholder="Masukkan penanggung jawab"
                value={penanggungJawab}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Pendamping Acara*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahPendampingAcara}
                placeholder="Masukkan pendamping acara"
                value={pendampingAcara}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Pengarah Kegiatan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahPengarahKegiatan}
                placeholder="Masukkan pengarah kegiatan"
                value={pengarahKegiatan}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Jumlah Tamu*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahJumlahTamu}
                placeholder="Masukkan jumlah tamu"
                value={jumlahTamu}
                keyboardType={'numeric'}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Sifat*</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Pilih Acara',
                  value: null,
                }}
                onValueChange={(value) => ubahSifat(value)}
                items={[
                  {label: 'Acara Politeknik', value: 'Acara Politeknik'},
                  {label: 'Acara Umum', value: 'Acara Mahasiswa/Umum'},
                ]}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Sifat*</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Pilih Jenis',
                  value: null,
                }}
                onValueChange={(value) => ubahJenis(value)}
                items={[
                  {label: 'Presentasi Profil', value: 'Presentasi Profil'},
                  {label: 'Diskusi', value: 'Diskusi'},
                  {
                    label: 'Kunjungan / Silaturahmi',
                    value: 'Kunjungan / Silaturahmi',
                  },
                  {label: 'Promosi', value: 'Promosi'},
                  {label: 'Lain - Lain', value: 'Lain - Lain'},
                ]}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Keterangan</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahKeterangan}
                placeholder="Masukkan keterangan bermasalah"
                value={keterangan}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Nama Pengaju Ruangan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNamaPengaju}
                placeholder="Masukkan nama pengaju ruangan"
                value={namaPengaju}
                editable={false}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>No. HP Pengaju Ruangan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNoHpPengaju}
                placeholder="Masukkan no. hp pengaju ruangan"
                value={noHpPengaju}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={submitForm} style={styles.buttonWrapper}>
            <View>
              <Text style={styles.textHeader}>Ajukan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.P4,
    paddingHorizontal: 8,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: colors.P4,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default FormPeminjaman;
