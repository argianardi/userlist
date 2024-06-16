import { prisma } from '@/lib/prisma';

// Get all contacts
export const getContacts = async () => {
  try {
    const contacts = await prisma?.contact
      .findMany({
        orderBy: { name: 'asc' },
      })
      .then((contacts) =>
        contacts.sort((firstContact, secondContact) => {
          if (
            firstContact.name.toLowerCase() < secondContact.name.toLowerCase()
          )
            return -1;
          if (
            firstContact.name.toLowerCase() > secondContact.name.toLowerCase()
          )
            return 1;
          return 0;
        })
      );

    return contacts;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};

// Get contact by id
export const getContactById = async (id: string) => {
  try {
    const contact = await prisma?.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};
