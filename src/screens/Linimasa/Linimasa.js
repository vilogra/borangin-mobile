import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import styles from './_linimasaStyle';

function Linimasa() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const getData = () => {
      axios
        .get('http://localhost:3000/requests')
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

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{`${item.ruangan}, ${item.namaPengaju}`}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return <View></View>;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View></View>
        <Text style={styles.textHeader}>Linimasa</Text>
        <View style={styles.arrow}></View>
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.textSection}>Linimasa</Text>
      </View>
      <View style={{width: '100%', height: '100%'}}>
        <Agenda
          minDate={new Date()}
          items={items}
          selected={'2021-07-01'}
          renderItem={renderItem}
          renderEmptyData={renderEmptyDate}
        />
      </View>
    </SafeAreaView>
  );
}

export default Linimasa;
