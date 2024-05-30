'use server';

import db from '@/lib/db';

export async function getMoreTweets(page: number) {
  const pageSize = 2;
  const skip = (page - 1) * pageSize;

  const Tweets = await db.tweet.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      created_at: true,
      user: {
        select: {
          username: true,
        },
      },
    },
    skip,
    take: pageSize,
    orderBy: {
      created_at: 'desc',
    },
  });
  return Tweets;
}
