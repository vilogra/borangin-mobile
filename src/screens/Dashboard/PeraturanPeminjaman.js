import React from 'react';
import {View, Text, Linking} from 'react-native';
import styles from './_dashboardStyle';

function PeraturanPeminjaman() {
  return (
    <View>
      <Text style={styles.textBody}>
        Alur proses peminjaman ruang kelas dan laboratorium Jurusan Teknik
        Informatika diluar jadwal yang sudah dipublish.
      </Text>
      <Text style={styles.textBody}>
        1. Peminjam ruang telah memastikan bahwa ruangan yang akan dipinjam
        tidak terjadwal di jadwal kuliah dan PBL Jurusan IF vrsi terakhir yang
        sudah di publish di{' '}
        <Text
          style={styles.textLink}
          onPress={() => {
            Linking.openURL(
              'https://if.polibatam.ac.id/pengumuman/2021/03/jadwal-perkuliahan-semester-genap-2020-2021-jurusan-teknik-informatika/',
            );
          }}>
          https://if.polibatam.ac.id/pengumuman/2021/03/jadwal-perkuliahan-semester-genap-2020-2021-jurusan-teknik-informatika/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        2. Peminjam ruang telah memastikan bahwa ruangan yang akan dipinjam
        tidak berstatus DIAJUKAN atau DISETUJUI yang dapat dilihat pada link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/linimasa
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        3. Peminjam ruang sudah mengkomunikasikan rencana peminjaman ruang
        dengan penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staff)
        sebelum mengisi pengajuan peminjaman ruang di official Website
        Peminjaman Ruangan Jurusan Teknik Informatika melalui link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/pengajuan/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        4. Setelah penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staf)
        menyetujui rencana peminjaman ruang yang dilakukan pada Poin Tahapan
        ke-3, Peminjam ruang mengajukan peminjaman ruang di Official Website
        Peminjaman Ruangan Jurusan Teknik Informatika melalui link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/pengajuan/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        5. Peminjam ruang harus menuliskan jumlah PC yang akan digunakan dalam
        tabel keterangan yang tersedia, sehinggu memungkinkan untuk
        mengoptimalkan penggunaan PC yang ada di lab tersebut.
      </Text>
      <Text style={styles.textBody}>
        6. Bagi Peminjam ruang yang tidak menuliskan jumlah PC yang akan
        digunakan maka silahkan mengupdate data peminjaman ruangan ke TU-IF
        sebelum meneruskan pada proses Tahapan selanjutnya. Jika hal ini ditak
        dilakukan maka pengajuan peminjaman ruangan dianggap tidak valid dan
        status peminjaman akan DITOLAK.
      </Text>
      <Text style={styles.textBody}>
        7. Pada table isian Dokumen Validasi* (Foto / Hasil Pindai Borang),
        dapat diganti dengan upload bukti komunikasi rencana peminjaman pada
        Poin Tahapan ke-3 berupa screenshot Chat (jika komunikasi daring) atau
        foto bersama penanggung jawab peminjaman ruang (Dosen/Staff) saat sedang
        berdiskusi (jika komunikasi luring).
      </Text>
      <Text style={styles.textBody}>
        8. Peminjam ruang melanjutkan proses peminjaman dengan mengirimkan email
        ke penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staf) dengan
        deskripsi email sebagai berikut:{'\n'}
        {'\n'}
        Subjek Email : Pengajuan Peminjaman Ruangan{'\n'}
        {'\n'}
        Isi email : Detil pengajuan ruangan yang sudah diisikan pada Poin
        Tahapan Ke-4 yang dapat dicopy paste dari
        http://if.polibatam.ac.id/peminjaman/linimasa atau bisa menggunakan
        kalender pada aplikasi Borangin.{'\n'}
        {'\n'}
        Contoh :{'\n'}Nama Kegiatan : PBL Pemrograman Game{'\n'}
        Tanggal Kegiatan : 8/March/2021 08:00 - 8/March/2021 11:00{'\n'}
        Ruangan : Ruang Kelas 606 Pengaju Borang : Andri Albertha{'\n'}
        No. HP Pengaju Borang: 08123456789
      </Text>
      <Text style={styles.textBody}>
        9. Jika penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staf) setuju
        dengan detil peminjaman diatas maka penanggung jawab/pembimbing/pembina
        kegiatan (Dosen/Staf) dapat langsung meneruskan email tersebut ke email
        Laboran Jurusan IF (laboran-if@polibatam.ac.id) sebagai pengganti tanda
        tangan Penanggung Jawab yang sebelumnya menggunakan borang BO.27.2.1-V4
        Borang Permintaan Penyelenggaraan Acara.
      </Text>
      <Text style={styles.textBody}>
        10. PIC Lab (Laboran) mengidentifikasi dan memverifikasi penggunaan Lab
        Jurusan berdasarkan Jadwal Kuliah dan PBL Jurusan IF Versi terakhir dan
        Data Pengajuan Peminjaman Ruang di
        http://if.polibatam.ac.id/peminjaman/linimasa atau bisa menggunakan
        kalender pada aplikasi Borangin.
      </Text>
      <Text style={styles.textBody}>
        11. Jika PIC Lab (Laboran) menyetujui, maka PIC Lab (Laboran) meneruskan
        email yang sudah diterima dari penanggung jawab/pembimbing/pembina
        kegiatan (Dosen/Staf) pada Poin Tahapan Ke-9 dan sudah diverivikasi pada
        Poin Tahapan Ke-10 ke TU-IF melalui email tu-if@polibatam.ac.id sebagai
        pengganti paraf PIC Laboran yang sebelumnya menggunakan borang
        BO.27.2.1-V4 Borang Permintaan Penyelenggaraan Acara untuk diproses
        selanjutnya.
      </Text>
      <Text style={styles.textBody}>
        12. TU-IF memverifikasi dan memutuskan untuk merubah status peminjaman
        dari DIAJUKAN menjadi DISETUJUI atau DITOLAK melalui
        https://if.polibatam.ac.id/peminjaman/tu/data-pengajuan.
      </Text>
      <Text style={styles.textBody}>
        13. Hanya status peminjaman "DISETUJUI" yang diperbolehkan untuk
        mengambil/meminjam kunci ruangan atau menggunakan Ruangan lab jurusan IF
        diluar jadwal yang sudah di publish.
      </Text>
      <Text style={styles.textBody}>
        14. Peminjam ruang menulis borang penggunaan barang dan meninggalkan KTM
        pada waktu akan mengambil kunci ruangan.
      </Text>
      <Text style={styles.textBody}>
        15. Untuk peminjaman ruangan di hari kerja, maka kunci dikembalikan
        sesuai dengan jadwal yang tertulis di borang peminjaman.
      </Text>
      <Text style={styles.textBody}>
        16. Untuk peminjaman ruangan di hari libur, maka kunci dikembalikan pada
        keesokan harinya (hari kerja) sebelum jam perkuliahan dimulai (sebelum
        pukul 07:50 WIB).
      </Text>
      <Text style={styles.textBody}>
        17. Peminjam ruangan melapor/mengembalikan kuci dan mengambil KTM yang
        sebelumnya ditinggalkan setelah selesai menggunakan ruangan.
      </Text>
      <Text style={styles.textBody}>
        18. TU-IF memverifikasi dan memutuskan untuk merubah status peminjaman
        yang sudah selesai dari DISETUJUI menjadi SELESAI atau BERMASALAH
        melalui https://if.polibatam.ac.id/peminjaman/tu/data-pengajuan.
      </Text>
      <Text style={styles.textBody}>
        19. Status peminjaman yang BERMASALAH akan ditindak lanjuti sesuai
        peraturan yang berlaku.
      </Text>
      <Text style={styles.textBody}>20. Selesai</Text>
    </View>
  );
}

export default PeraturanPeminjaman;
