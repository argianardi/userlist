import { getContacts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import React from 'react';
import { DeleteButton, EditButton } from './button';

const ContactTable = async () => {
  const contacts = await getContacts();

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact, index) => (
          <tr key={index}>
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contact?.name}</td>
            <td className="py-3 px-6">{contact?.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contact?.createAt.toString())}
            </td>
            <td className="py-3 flex justify-center gap-1">
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
