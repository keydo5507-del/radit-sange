# Our Love Story ❤️

## Deploy ke Vercel
Upload folder ini ke GitHub → vercel.com → Add New Project → Import → Deploy (atau `npx vercel`). Tidak perlu environment variable.

## Ganti PIN
Buka `public/index.html`, cari `const PIN='123456'` di bagian paling atas `<script>`, ganti dengan 6 angkamu, lalu deploy ulang.
Catatan: PIN ada di kode halaman, jadi ini pengaman ringan (orang yang membuka source bisa melihatnya).

## Kustomisasi
- Semua teks, nama, tanggal, kuis, hadiah, playlist: `api/_content.js`
- Foto: sudah terpasang di `public/photos/1.jpg` – `5.jpg`; ganti file atau caption di `photos`
- Musik: diputar lewat pemutar resmi YouTube. Ganti/tambah lagu di `tracks` dengan `{ title, yt: 'ID_VIDEO' }` (ID = bagian setelah `youtu.be/`). Jika pemilik video melarang embed, lagu tidak akan terputar.

Lokal: `npx vercel dev`
