import React from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import PeraturanPeminjaman from './PeraturanPeminjaman';
import styles from './_dashboardStyle';

function Dashboard() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View />
          <Text style={styles.textHeader}>Beranda</Text>
          <View />
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.textSection}>Borangin Polibatam</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.textTitle}>Peraturan Peminjaman</Text>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.bottomScrollViewContent}>
              <PeraturanPeminjaman />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
