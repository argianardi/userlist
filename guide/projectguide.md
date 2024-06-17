- Setup Project [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1m50s)
- Slicing UI table, button dan search input untuk page contact [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=43m34s)
- Setup Prisma [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=15m53s)
  - Install prisma dengan command `npm 1 -D prisma`
  - Install prisma client degan command `npm i @prisma/client`
  - Initialize Prisma dengan command `npx prisma init`
- Buat Database menggunakan postgreSQL di vercel [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=17m20s)
- Buat Prisma Model [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=19m20s)
  - Buat Table dan column di file `prisma/schema.prisma`
  - Jalankan migrasi dengan command `npx prisma migrate dev`
  - Masukkan data ke dalam table yang sudah kita buat tadi secara manual sebagai sample, menggunakan prisma studio. Untuk membuka prisma studio dapat dilakukan dengan command `npx prisma studio`, kemudian akan muncul port. Selanjutnya buka port tersebut di broswer dan isikan beberapa data di sana
- Data Fetching [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=23m06s)
  - Buat instance untuk prisma client untuk melakukan pengecekan apakah kita sekarang ini sedang dalam mode development atau production agar prisma client tidak melakukan running berulang ulang saat mode development.
  - Buat method untuk melakukan fetch data dari database
  - Import dan panggil method fetch data tadi di component table list contact untuk menampilkan data contacts dari data base
  - Mapping data list contact yang didapat dari data base tadi
  - Buat method untuk mengubah format date untuk properti `updateAt` [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=29m18s)
- Buat Fitur Create Contact [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=34m49s)

  - Buat halam create contact di directory `App/contacts/create/page.tsx` [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=34m50s)
  - Buat component form create contact di directori `components/create-form.tsx` [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=19m20s)
  - Buat method action untuk melakukan create contact ke data base di directory `/lib/actions.ts` [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=40m40s)
  - Panggil method action create contact tadi ke bagian action di component form create contact [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=42m22s)
  - Buat validasi pada data yang diinputkan user menggungan zod agar data yang masuk ke database adalah data yang valid [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=43m04s)
    - Install zod
    - Balik ke method action create contact buat dan gunakan schema zod untuk melakukan validasi
  - Buat button Save dan Edit dengan tampilan yang responsive saat dalam kondisi pendding dalam proses save dan edit, menggunakan [clsx](https://www.npmjs.com/package/clsx) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=53m14s)

- Buat fitur Edit Contact

  - Buat halaman edit contact [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=60m13s)
  - Buat method untuk melakukan get data contact by id di file yang sama dengan method get all contacts (`lib/data.ts`) dan lakukan fetch dengan method get contact by id di page edit contact (`app/edit/[id]/page.tsx`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h3m54s)
  - Tangkap contact yang didapat dari fetch api get contact by id tadi di component form edit (`component/edit-form.tsx`) dant tampilakan value contact tersebut di tag input sebai default value [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h06m55s)
  - Buat method update contact by id untuk mengedit data contact di file yang sama dengan method create contact (`lib/actions.ts`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h11m11s)
  - Kirim id contact dari component form edit ke server action update contact by id tadi melalui bind (cara yang paling direkomendasikan oleh next js) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h9m33s)

- Buat Fitur Delete Contact [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h12m51s)

  - Buat server action untuk melakukan delete data di databese by id di file yang sama dengan server action create dan update contact (`lib/actions.ts`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h14m31s)
  - Tambahkan prop id di button delete component button dan panggil action delete contact tadi dan kirimkan id contact menggunakan bind (`components/button.tsx`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h13m08s)
  - Tambahkan value id di prop button delete yang dipanggil di component table-contact (`components/contact-table.tsx`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h12m51s)
  -

- Buat Fitur Search Contact

  - Buat function handle search di sarch component (`components/search.tsx`). Function handleSearch ini digunakan untuk menghandle search input yang dikirimkan oleh user dan mengganti URL halaman web dengan parameter baru yang sesuai dengan search input yang dikirimkan user tadi. [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h16m11s)
  - Tambahkan parameter query di function get all contacts yang terletak di file (`lib/data.ts`) untuk memungkinkan user melakukan filtering berdasarkan search input yang dimasukkan [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h24m30s).
  - Masuk ke component contact table (`components/contact-table.tsx`) tambahkan prop query di function get all contact dan tambahkan juga prop query search input untuk component contact table ini [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h23m47s)
  - Masuk ke halaman contact (`app/contacts/page.tsx`)
    tangakap search params melalui prop kemudian tambahkan juga prop searchParams yang berisi query search itu ke prop di component contact table [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h21m35s)
  - Dan sekarang fitur search contact sudah berjalan dengan baik, dimana proses fetch data contact dilakukan setiap user.
  - Tambahkan [use-debounce](https://www.npmjs.com/package/use-debounce) pada di function handle search untuk menunda eksekusi fetch data dari api beberapa detik setelah user mengetik search input. Sehingga lebih clean secara teknis, tidak mubadzir dalam melakukan fetch data [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h26m45s)

- Buat Fitur Pagination [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h29m58s)

  - Buat method untuk melakukan fetch ke database untuk mendapatkan nilai total page dan tambahkan limit di method fetch all contacts untuk memberi limit data yang ditampilkan per page di (`/lib/data.ts`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h54m12s)
  - Panggil method get contact pages itu ke page contact (`/app/contact/page.tsx`) untuk menampilkan total page contact di halaman contact ini. Kemudian perbaiki prop pada component page contact ini, tambahkan search params page disana untuk mendapatkan value page yang diinputkan user.
  - Masuk ke component contact table (`components/contact-table.tsx`) tambahkan prop current page untuk dimasukkan kedalam argument method get all contacts yang dipanggil di component contact table ini. Balik lagi ke page contact masukkan value current page ke dalam prop current page di component contact table.
  - Buat function generate pagination di file utils (`/lib/utils.ts`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h50m07s)
  - Buat component pagination di folder components (`pagination.tsx`) [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=1h29m58s)

- Buat skeleton

  - Buat table skeleton [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=2h02m45s)
  - Import dan gunakan [`Suspense`](https://react.dev/reference/react/Suspense) dari react untuk membungkus component `table contact`. Suspensi ini digunakan untuk mengatur UI yang akan ditampilkan ketika loading (proses fetch data) terjadi
  - Import dan letakkan component `table skeleton` tadi ke properti fallback di tag`Suspense`. [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=2h05m53s)
  - Buat promise di method fetch get all contacts (`lib/data.ts`) untuk memperlambat proses fetch data contact untuk melihat lebih jelas tampilan component `skeleton table` [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=2h07m15s)

- Ganti [judul](https://www.youtube.com/watch?v=1OqftoKO2V0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=18) dan [icon](https://www.youtube.com/watch?v=VUNTiaIXW80) aplikasi.
- Deploy project ke vercel [ref](https://www.youtube.com/watch?v=TkbvrCLmnSo&t=2h09m45s)
