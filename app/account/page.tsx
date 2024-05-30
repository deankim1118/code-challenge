import Button from '@/components/button';
import Link from 'next/link';

export default function Account() {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3 w-[200px]'>
        <h1 className='text-6xl'>🔥</h1>
        <Link href='/create-account' className='py-2.5 text-lg w-full'>
          <Button text='Create Account' />
        </Link>
        <Link href='/login' className='py-2.5 text-lg w-full'>
          <Button text='Login' />
        </Link>
      </div>
    </main>
  );
}
