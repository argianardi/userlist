'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // use-deounced akan menunda eksekusi fungsi handle search ini selama 300 ms
  const handleSearch = useDebouncedCallback((searchInput: string) => {
    // Buat objek URLSearchParams dari objek searchParams
    const params = new URLSearchParams(searchParams);

    // Atur parameter 'page' menjadi '1' saat user  searching
    params.set('page', '1');

    // Jika input pencarian tidak kosong
    if (searchInput) {
      // Atur parameter 'query' dengan nilai input pencarian
      params.set('search-contact', searchInput);
    } else {
      // Hapus parameter 'query' jika input pencarian kosong
      params.delete('search-contact');
    }

    // Ganti URL dengan parameter baru
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        placeholder="Search..."
        defaultValue={searchParams.get('search-contact')?.toString()}
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Search;
