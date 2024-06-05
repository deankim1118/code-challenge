import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex justify-start gap-4 pb-6 text-cyan-600 w-full sm:max-w-screen-sm'>
      <Link href='/' className='flex flex-col items-center'>
        <HomeIcon className='w-8' />
        <span>Home</span>
      </Link>
      <Link href='/profile' className='flex flex-col items-center '>
        <UserIcon className='w-8' />
        <span>Profile</span>
      </Link>
    </nav>
  );
}
