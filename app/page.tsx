import db from '@/lib/db';
import { Prisma } from '@prisma/client';
import TweetList from '@/components/tweet-list';
import NavBar from '@/components/navBar';

async function getInitialTweets() {
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
    take: 1,
    orderBy: {
      created_at: 'desc',
    },
  });
  return Tweets;
}

export type initialTweetsType = Prisma.PromiseReturnType<
  typeof getInitialTweets
>;

export default async function Home() {
  const initialTweets = await getInitialTweets();
  return (
    <>
      <NavBar />
      <TweetList initialTweets={initialTweets} />
    </>
  );
}
