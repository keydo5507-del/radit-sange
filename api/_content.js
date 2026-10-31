// ✏️ EDIT DI SINI: semua nama, teks, tanggal, foto, dan musik.
module.exports = {
  title: 'Our Love Story ❤️',
  name: 'Sayang',
  from: 'Kekasihmu',
  start: '2024-02-14',      // tanggal jadian
  special: '2027-02-14',    // tanggal spesial (countdown)
  welcome: 'Selamat datang di dunia kecil kita. Semua ini dibuat khusus untukmu.',
  random: ['Kamu alasan aku tersenyum hari ini.', 'Di mana pun kamu, di situ rumahku.', 'Terima kasih sudah ada.'],
  foryou: ['Kamu adalah doa yang paling indah.', 'Bersamamu, hari biasa jadi istimewa.', 'Aku memilihmu, hari ini dan selamanya.'],
  reasons: ['Senyummu menenangkan duniaku.', 'Kamu sabar menghadapiku.', 'Tawamu bikin ketagihan.', 'Kamu percaya padaku.'],
  photos: [ // ganti file di public/photos atau caption di sini
    { src: '/photos/1.jpg', w: 866, h: 649, cap: 'Senyum yang bikin duniaku tenang' },
    { src: '/photos/2.jpg', w: 866, h: 649, cap: 'Tatapan yang selalu kuingat' },
    { src: '/photos/3.jpg', w: 866, h: 432, cap: 'Hangatnya kamu di setiap hariku' },
    { src: '/photos/4.jpg', w: 719, h: 720, cap: 'Malu-malu yang menggemaskan' },
    { src: '/photos/5.jpg', w: 1000, h: 689, cap: 'Cahaya paling indah dalam hidupku' }
  ],
  promises: ['Aku akan selalu jujur padamu.', 'Aku akan menemanimu di susah dan senang.', 'Aku akan terus belajar mencintaimu lebih baik.'],
  letter: 'Untuk kamu yang tercinta,\n\nTerima kasih sudah hadir dan membuat hidupku lebih berwarna. Apa pun yang terjadi, aku ingin tetap di sisimu.\n\nDengan cinta,\nKekasihmu ❤️',
  quiz: [
    { q: 'Di mana kita pertama kali bertemu?', a: ['Kafe', 'Sekolah', 'Online', 'Taman'], c: 0 },
    { q: 'Makanan favoritku?', a: ['Bakso', 'Pizza', 'Nasi goreng', 'Sushi'], c: 2 },
    { q: 'Warna kesukaanku?', a: ['Pink', 'Biru', 'Hitam', 'Ungu'], c: 0 }
  ], // c = nomor jawaban benar (mulai dari 0)
  wheel: ['Peluk 10 detik 🤗', 'Traktir es krim 🍦', 'Cium kening 😘', 'Nonton bareng 🎬', 'Pijat 5 menit 💆', 'Makan malam romantis 🍝'],
  gifts: ['Voucher kencan 🍽️', 'Satu permintaan bebas 💫', 'Tiga pelukan 🤗', 'Surat cinta baru 💌'],
  tracks: [ // yt = ID video YouTube (bagian setelah youtu.be/ sebelum tanda ?)
    { title: 'Kita Lewati Berdua', yt: 'SeSAwqq_Kpo' }
  ]
};
