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

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
