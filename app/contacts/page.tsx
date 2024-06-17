import { CreateButton } from '@/components/button';
import ContactTable from '@/components/contact-table';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { getContactPages } from '@/lib/data';
import React from 'react';

const Contacts = async ({
  searchParams,
}: {
  searchParams?: { 'search-contact'?: string; page?: string };
}) => {
  const query = searchParams?.['search-contact'] || '';
  const totalPages = await getContactPages(query);
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
      <div className="flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
