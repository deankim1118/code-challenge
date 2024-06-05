import db from '@/lib/db';
import { getSession } from '@/lib/session';
import { notFound, redirect } from 'next/navigation';
import { UserIcon } from '@heroicons/react/24/solid';

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    'use server';
    const session = await getSession();
    session.destroy();
    redirect('/');
  };

  return (
    <div className='w-screen flex flex-col gap-4 items-center text-xl'>
      <div className='p-5 flex items-center justify-center gap-3 w-full'>
        <span>Welcome</span>
        <div className='size-10 rounded-full overflow-hidden'>
          <UserIcon />
        </div>
        <span>{user!.username}</span>
      </div>
      <div>
        <span>{user!.email}</span>
      </div>
    </div>
  );
}
