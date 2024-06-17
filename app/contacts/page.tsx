import { CreateButton } from '@/components/button';
import ContactTable from '@/components/contact-table';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import SkeletonTable from '@/components/skeleton-table';
import { getContactPages } from '@/lib/data';
import React, { Suspense } from 'react';

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
      <Suspense key={query + currentPage} fallback={<SkeletonTable />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
