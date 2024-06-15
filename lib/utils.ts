export const formatDate = (dateStr: string) => {
  // Konversi data tanggal bertipe string  menjadi objek Date
  const date = new Date(dateStr);

  // Buat objek formatter untuk mengatur format tanggal dan waktu
  const formatter = new Intl.DateTimeFormat('id-ID', {
    // Set format tanggal menjadi medium (contoh: 12 Februari 2023)
    dateStyle: 'medium',

    // Set format waktu menjadi short (contoh: 14:30)
    timeStyle: 'short',
  });

  // Format objek Date menggunakan formatter dan kembalikan string tanggal
  return formatter.format(date);
};
