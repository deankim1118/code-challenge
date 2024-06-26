'use client';

import { useFormState } from 'react-dom';
import { login } from '../app/(auth)/login/action';
import Input from '@/components/input';
import Button from '@/components/button';

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, null);
  const emailIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
      />
    </svg>
  );
  const userIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  );
  const passwordIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z'
      />
    </svg>
  );

  return (
    <div className=' flex flex-col gap-2 items-center justify-center  max-w-[640px] h-screen mx-auto'>
      <h1 className='text-6xl'>🔥</h1>
      <form
        action={dispatch}
        className='flex flex-col justify-center gap-4 p-10 w-full'
      >
        <Input
          name='email'
          type='email'
          placeholder='Email'
          required
          errors={state?.fieldErrors.email}
        >
          {emailIcon}
        </Input>
        <Input
          name='password'
          type='password'
          placeholder='Password'
          required
          errors={state?.fieldErrors.password}
        >
          {passwordIcon}
        </Input>
        <Button text='Login' />
      </form>
    </div>
  );
}
