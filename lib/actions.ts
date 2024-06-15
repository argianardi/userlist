'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// Definisikan schema untuk validasi data
const ContactSchema = z.object({
  name: z.string().min(6, 'Nama harus lebih dari 6 karakter'),
  phone: z.string().min(11, 'Nomor telepon harus lebih dari 11 karakter'),
});

// Fungsi untuk menyimpan data contact
export const saveContact = async (prevState: any, formData: FormData) => {
  // Validasi data yang dikirim
  const validatedFields = ContactSchema.safeParse(
    // Konversi data ke dalam bentuk objek
    Object.fromEntries(formData.entries())
  );

  // Jika data tidak valid, kembalikan error
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Simpan data ke dalam database menggunakan Prisma
    await prisma?.contact.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    // Jika terjadi error, kembalikan pesan error
    return {
      message: 'Failed to create contact',
    };
  }

  // Revalidate path dan redirect ke halaman contact
  revalidatePath('/contacts');
  redirect('/contacts');
};
