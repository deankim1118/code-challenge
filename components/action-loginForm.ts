'use server';
import { z } from 'zod';

const PASSWORD_REGEX = new RegExp(/^(?=.*\d).+$/);

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .includes('@zod.com', { message: 'Only @zod.com emails are allowed' }),
  username: z.string().min(5, 'Username should be at least 5 characters long'),
  password: z
    .string()
    .min(10, 'Password should be at least 10 characters long')
    .regex(
      PASSWORD_REGEX,
      'Password should contain at least one number (0123456789)'
    ),
});

interface IActionState {
  isLoginTrue: boolean;
}

export const login = async (prevState: IActionState, formData: FormData) => {
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const result = await formSchema.safeParse(data);

  if (!result.success) {
    return {
      isLoginTrue: false,
      errors: result.error.flatten(),
    };
  }
  return {
    isLoginTrue: true,
  };
};
