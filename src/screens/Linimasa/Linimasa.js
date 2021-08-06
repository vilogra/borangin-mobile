import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/id';
import styles from './_linimasaStyle';
import colors from '../../utils/constant/color';

function Linimasa() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://peminjaman-ruangan-api.herokuapp.com/loans')
        .then(async (res) => {
          const data = await res.data;
          if (data) {
            setItems(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  const statusType = (type) => {
    switch (type) {
      case 'succeed':
        return <Text>Status: Diterima</Text>;
      case 'rejected':
        return <Text>Status: Ditolak</Text>;
      default:
        return <Text>Status: Diproses</Text>;
    }
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text>{`${item.ruangan}, ${item.namaPengajuRuangan}`}</Text>
              <Text>{`Dari ${moment(item.tanggalMulaiKegiatan).format(
                'dddd',
              )}, ${moment(item.tanggalMulaiKegiatan).format(
                'DD-MM-YYYY',
              )}, ${moment(item.tanggalMulaiKegiatan)
                .utcOffset(0)
                .format('HH.mm')} WIB`}</Text>
              <Text>{`Sampai ${moment(item.tanggalAkhirKegiatan).format(
                'dddd',
              )}, ${moment(item.tanggalAkhirKegiatan).format(
                'DD-MM-YYYY',
              )}, ${moment(item.tanggalAkhirKegiatan)
                .utcOffset(0)
                .format('HH.mm')} WIB`}</Text>
              <Text>{statusType(item.status)}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return <View />;
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.P1}}>
      <View style={styles.container}>
        <View />
        <Text style={styles.textHeader}>Linimasa</Text>
        <View />
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.textSection}>Linimasa</Text>
      </View>
      <View style={{width: '100%', height: '100%'}}>
        <Agenda
          // minDate={new Date()}
          items={items}
          selected={new Date()}
          renderItem={renderItem}
          renderEmptyData={renderEmptyDate}
          refreshing={true}
        />
      </View>
    </SafeAreaView>
  );
}

export default Linimasa;
