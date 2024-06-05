'use client';

import Input from '@/components/input';
import { useFormState } from 'react-dom';
import Button from '@/components/button';
import { createAccount } from './action';

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className=' flex flex-col gap-2 items-center justify-center  max-w-[640px] h-screen mx-auto'>
      <form
        action={dispatch}
        className='flex flex-col justify-center gap-4 p-10 w-full'
      >
        <Input
          name='username'
          type='text'
          placeholder='Username'
          minLength={3}
          required
          errors={state?.fieldErrors.username}
        />
        <Input
          name='email'
          type='email'
          placeholder='Email'
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          minLength={5}
          required
          errors={state?.fieldErrors.password}
        />
        <Input
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          required
          errors={state?.fieldErrors.confirmPassword}
        />
        <Button text='Create account' />
      </form>
    </div>
  );
}
