'use server';
import db from '@/lib/db';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { PASSWORD_REGEX } from '@/lib/constants';

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .min(3, 'Password should be at least 5 characters long'),
  password: z
    .string()
    .min(5, 'Password should be at least 5 characters long')
    .regex(
      PASSWORD_REGEX,
      'Password should contain at least one number (0123456789)'
    ),
});

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  }
  const user = await db.user.findUnique({
    where: {
      email: result.data.email,
    },
    select: {
      id: true,
      password: true,
    },
  });
  const ok = await bcrypt.compare(result.data.password, user!.password ?? '');
  if (ok) {
    const session = await getSession();
    session.id = user!.id;
    await session.save();
    redirect('/profile');
  } else {
    return {
      //  Pretend to be Zod & Make same shape of zod.error.flatten() to send the error message
      fieldErrors: {
        password: ['Wrong password'],
        email: [],
      },
    };
  }
};
