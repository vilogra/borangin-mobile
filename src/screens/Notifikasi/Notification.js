import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './_notifikasiStyle';

function Notification({type, id}) {
  const itemType = (type) => {
    let icon = require('./assets/succeed.png');
    let backgroundColor = '#EAF7EE';
    let borderColor = '#629161';
    let status = 'Diterima';
    let message = `Pengajuan peminjaman ruangan dengan ID ${id} telah diterima.`;
    switch (type) {
      case 'procceed':
        icon = require('./assets/proceed.png');
        backgroundColor = '#E5EFFA';
        borderColor = '#006CE3';
        status = 'Diajukan';
        message = `Pengajuan peminjaman ruangan dengan ID ${id} telah diajukan. Silahkan  menghubungi admin@borangin.com untuk informasi lebih lanjut.`;
        break;
      case 'rejected':
        icon = require('./assets/rejected.png');
        backgroundColor = '#FBEDEA';
        borderColor = '#EB4E2D';
        status = 'Ditolak';
        message = `Pengajuan peminjaman ruangan dengan ID ${id} telah ditolak. Silahkan  menghubungi admin@borangin.com untuk informasi lebih lanjut.`;
        break;
    }
    return {
      icon,
      backgroundColor,
      borderColor,
      status,
      message,
    };
  };
  return (
    <View
      style={[
        styles.notification,
        {
          backgroundColor: itemType(type).backgroundColor,
          borderColor: itemType(type).borderColor,
        },
      ]}>
      <View style={styles.title}>
        <Image source={itemType(type).icon} />
        <Text style={styles.textTitle}>Peminjaman {itemType(type).status}</Text>
      </View>
      <Text>{itemType(type).message}</Text>
    </View>
  );
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.any,
};

Notification.defaultProps = {
  type: 'succeed',
  id: '123',
};

export default Notification;
