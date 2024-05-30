import db from '@/lib/db';
import { formatTimeAgo } from '@/lib/utils';
import { notFound } from 'next/navigation';

async function getTweet(id: number) {
  const tweet = await db.tweet.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return tweet;
}

export default async function TweetsDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  const tweet = await getTweet(id);
  if (!tweet) {
    return notFound();
  }

  return (
    <div className='flex w-screen h-screen justify-center p-20'>
      <div className='flex flex-col w-full max-w-screen-sm h-min gap-4 rounded-md ring-1 p-4 ring-orange-400'>
        <div className='flex justify-between *:text-sm'>
          <span className='uppercase font-semibold'>{tweet.user.username}</span>
          <span>{formatTimeAgo(tweet.created_at.toString())}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-lg uppercase font-semibold'>{tweet.title}</span>
          <span className='text-md'>{tweet.description}</span>
        </div>
      </div>
    </div>
  );
}
