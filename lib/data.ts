import { prisma } from '@/lib/prisma';

const ITEMS_PER_PAGE = 5;

// Get all contacts
export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // Promise delay digunakan untuk menunda proses fetch data selama 3 detik
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const contacts = await prisma?.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      orderBy: {
        name: 'asc',
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return contacts.sort((firstContact, secondContact) => {
      if (firstContact.name.toLowerCase() < secondContact.name.toLowerCase())
        return -1;
      if (firstContact.name.toLowerCase() > secondContact.name.toLowerCase())
        return 1;
      return 0;
    });
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

// Get contact pages
export const getContactPages = async (query: string) => {
  try {
    const contacts = await prisma?.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};
