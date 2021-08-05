import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LogBox,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import colors from '../../utils/constant/color';

import styles from './_formPeminjamanStyle';

const arrowLeft = require('./assets/arrowLeft.png');
LogBox.ignoreAllLogs();
const DATE_TODAY = new Date();

function FormPeminjaman({navigation}) {
  const [userData, setUserData] = useState({id: null, name: ''});

  const [minimumDate, setMinimumDate] = useState(DATE_TODAY);
  const [tanggalAwal, setTanggalAwal] = useState(DATE_TODAY);
  const [jamAwal, setJamAwal] = useState(DATE_TODAY);
  const [tanggalAkhir, setTanggalAkhir] = useState(DATE_TODAY);
  const [jamAkhir, setJamAkhir] = useState(DATE_TODAY);
  const [namaKegiatan, ubahNamaKegiatan] = useState('');
  const [lab, ubahLab] = useState(null);
  const [namaPengaju, ubahNamaPengaju] = useState('');
  const [noHpPengaju, ubahNoHpPengaju] = useState('');
  const [penanggungJawab, ubahPenanggungJawab] = useState('');
  const [pendampingAcara, ubahPendampingAcara] = useState('');
  const [pengarahKegiatan, ubahPengarahKegiatan] = useState('');
  const [jumlahTamu, ubahJumlahTamu] = useState('');
  const [sifat, ubahSifat] = useState(null);
  const [jenis, ubahJenis] = useState(null);
  const [keterangan, ubahKeterangan] = useState('');
  const [mode, setMode] = useState('date');
  const [showTanggalAwal, setShowTanggalAwal] = useState(false);
  const [showJamAwal, setShowJamAwal] = useState(false);
  const [showTanggalAkhir, setShowTanggalAkhir] = useState(false);
  const [showJamAkhir, setShowJamAkhir] = useState(false);

  const showDateAwal = () => {
    setMode('date');
    setShowTanggalAwal(true);
  };
  const showDateAkhir = () => {
    setMode('date');
    setShowTanggalAkhir(true);
  };

  const showClockAwal = () => {
    setMode('time');
    setShowJamAwal(true);
  };
  const showClockAkhir = () => {
    setMode('time');
    setShowJamAkhir(true);
  };

  const submitForm = async () => {
    if (
      !!namaKegiatan &&
      !!lab &&
      !!namaPengaju &&
      !!noHpPengaju &&
      !!penanggungJawab &&
      !!pendampingAcara &&
      !!pengarahKegiatan &&
      !!jumlahTamu &&
      !!sifat &&
      !!jenis &&
      !!tanggalAwal &&
      !!tanggalAkhir &&
      !!jamAwal &&
      !!jamAkhir
    ) {
      const data = {
        userId: userData.nim_nik_unit,
        namaKegiatan: namaKegiatan,
        ruangan: [lab],
        namaPengajuRuangan: namaPengaju,
        hpPengajuRuangan: noHpPengaju,
        penanggungJawab: penanggungJawab,
        pendampingAcara: pendampingAcara,
        pengarahKegiatan: pengarahKegiatan,
        jumlahTamu: jumlahTamu,
        sifat: sifat,
        jenis: jenis,
        keterangan: keterangan ? keterangan : 'Tidak ada keterangan',
        tanggalMulaiKegiatan: `${moment(tanggalAwal).format(
          'YYYY-MM-DD',
        )}T${moment(jamAwal).format('HH:mm')}:00.000Z`,
        tanggalAkhirKegiatan: `${moment(tanggalAkhir).format(
          'YYYY-MM-DD',
        )}T${moment(jamAkhir).format('HH:mm')}:00.000Z`,
        diterima: false,
        status: 'procceed',
      };
      console.log(data);
      await axios
        .post('https://peminjaman-ruangan-api.herokuapp.com/loans', data, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          alert('Pengajuan berhasil dilakukan');
          setTimeout(() => {
            navigation.navigate('Notifikasi');
          }, 2000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      alert('Isi form terlebih dahulu');
    }
  };

  useEffect(() => {
    const dataProfile = async () => {
      const data = await AsyncStorage.getItem('userData');
      console.log('data', data);
      setUserData(JSON.parse(data));
    };
    dataProfile();
    console.log('pertama', userData);
    setTimeout(() => {
      console.log(userData);
      ubahNamaPengaju(userData.name);
      ubahNoHpPengaju(userData.notelp);
    }, 5000);
  }, [userData.name]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.arrow} source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Peminjaman</Text>
            <View style={styles.arrow} />
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
              <Text style={styles.labelInput}>Tanggal Mulai Kegiatan*</Text>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={showDateAwal}>
                <Text>{moment(tanggalAwal).format('YYYY-MM-DD')}</Text>
              </TouchableOpacity>
              {showTanggalAwal && (
                <DateTimePicker
                  value={tanggalAwal}
                  mode={mode}
                  placeholder="Pilih tanggal"
                  format="YYYY-MM-DD HH:mm"
                  minimumDate={new Date()}
                  maxDate="2022-06-01"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate;
                    setShowTanggalAwal(false);
                    setTanggalAwal(currentDate);
                  }}
                />
              )}
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Jam Mulai Kegiatan*</Text>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={showClockAwal}>
                <Text>{moment(jamAwal).format('HH:mm')}</Text>
              </TouchableOpacity>
              {showJamAwal && (
                <DateTimePicker
                  value={jamAwal}
                  mode={mode}
                  placeholder="Pilih tanggal"
                  format="YYYY-MM-DD HH:mm"
                  minimumDate={minimumDate}
                  maxDate="2022-06-01"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate;
                    setShowJamAwal(false);
                    setJamAwal(currentDate);
                  }}
                />
              )}
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Tanggal Akhir Kegiatan*</Text>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={showDateAkhir}>
                <Text>{moment(tanggalAkhir).format('YYYY-MM-DD')}</Text>
              </TouchableOpacity>
              {showTanggalAkhir && (
                <DateTimePicker
                  value={tanggalAkhir}
                  mode={mode}
                  placeholder="Pilih tanggal"
                  format="YYYY-MM-DD HH:mm"
                  minimumDate={minimumDate}
                  maxDate="2022-06-01"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate;
                    setShowTanggalAkhir(false);
                    setTanggalAkhir(currentDate);
                  }}
                />
              )}
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Jam Akhir Kegiatan*</Text>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={showClockAkhir}>
                <Text>{moment(jamAkhir).format('HH:mm')}</Text>
              </TouchableOpacity>
              {showJamAkhir && (
                <DateTimePicker
                  value={jamAkhir}
                  mode={mode}
                  placeholder="Pilih tanggal"
                  format="YYYY-MM-DD HH:mm"
                  minimumDate={minimumDate}
                  maxDate="2022-06-01"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate;
                    setShowJamAkhir(false);
                    setJamAkhir(currentDate);
                  }}
                />
              )}
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
                value={sifat}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Pilih Acara',
                  value: null,
                }}
                onValueChange={(value) => {
                  ubahSifat(value);
                }}
                items={[
                  {
                    label: 'Acara Politeknik',
                    value: 'Acara Politeknik',
                    color: '#000000',
                  },
                  {
                    label: 'Acara Umum',
                    value: 'Acara Politeknik',
                    color: '#000000',
                  },
                ]}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Jenis*</Text>
              <RNPickerSelect
                value={jenis}
                useNativeAndroidPickerStyle={false}
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
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Ruangan*</Text>
              <RNPickerSelect
                value={lab}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Pilih Ruangan',
                  value: null,
                }}
                onValueChange={(value) => ubahLab(value)}
                items={[
                  {label: 'Lab 805', value: 'Lab 805'},
                  {label: 'Lab 606', value: 'Lab 606'},
                  {
                    label: 'Lab 604',
                    value: 'Lab 604',
                  },
                  {label: 'Lab 601', value: 'Lab 601'},
                  {label: 'Lab 602', value: 'Lab 602'},
                  {label: 'Lab 607', value: 'Lab 607'},
                  {label: 'Lab 704', value: 'Lab 704'},
                  {label: 'Lab 706', value: 'Lab 706'},
                  {
                    label: 'Lab Animasi RTF.IV.2',
                    value: 'Lab Animasi RTF.IV.2',
                  },
                  {label: 'Studio Fotografi', value: 'Studio Fotografi'},
                  {label: 'Lab RTF.V.2', value: 'Lab RTF.V.2'},
                  {label: 'Lab Audio', value: 'Lab Audio'},
                  {label: 'Lab 705', value: 'Lab 705'},
                  {label: 'Lab RTF.V.1', value: 'Lab RTF.V.1'},
                  {label: 'Lab Clay Modeling', value: 'Lab Clay Modeling'},
                  {label: 'Studio Broadcasting', value: 'Studio Broadcasting'},
                  {label: 'Lab 707', value: 'Lab 707'},
                  {label: 'Lab 608', value: 'Lab 608'},
                  {label: 'RTF.V.4', value: 'RTF.V.4'},
                  {label: 'Lab TA 10.4', value: 'Lab TA 10.4'},
                  {label: 'Lab TA 11.4', value: 'Lab TA 11.4'},
                  {label: 'Lab TA 11.5', value: 'Lab TA 11.5'},
                  {label: 'Ruang 11.1', value: 'Ruang 11.1'},
                ]}
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
    paddingRight: 30,
  },
  inputAndroid: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.P4,
    paddingRight: 30,
    color: '#000000',
  },
});
export default FormPeminjaman;
