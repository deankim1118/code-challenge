import Button from '@/components/button';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3 w-[200px]'>
        <h1 className='text-6xl'>🔥</h1>
        <Link
          href='/create-account'
          className='primary-btn py-2.5 text-lg w-full'
        >
          <Button text='Create Account' disabled={false} />
        </Link>
        <Link
          href='/login'
          className=' hover:underline underline-offset-4 w-full'
        >
          <Button text='Login' disabled={false} />
        </Link>
      </div>
    </main>
  );
}
