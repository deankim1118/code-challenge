'use client';

import { initialTweetsType } from '@/app/page';
import { getMoreTweets } from '@/app/(nav)/tweets/[id]/action';
import { formatTimeAgo } from '@/lib/utils';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IInitialTweets {
  initialTweets: initialTweetsType;
}

export default function TweetList({ initialTweets }: IInitialTweets) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [tweets, setTweets] = useState(initialTweets);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const fetchTweets = async (page: number) => {
    setIsLoading(true);
    const newTweets = await getMoreTweets(page);
    setTweets(newTweets);
    setIsLoading(false);
    if (newTweets.length === 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  };

  useEffect(() => {
    const pageParams = searchParams.get('page');
    const page = parseInt(pageParams || '1', 10);

    setCurrentPage(page);
    fetchTweets(page);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`?page=${newPage}` || null || '');
    fetchTweets(newPage);
  };

  return (
    <>
      <ul className='flex flex-col gap-4 max-w-screen-sm w-full'>
        <h1 className='text-lg font-bold text-orange-500 uppercase'>Tweets</h1>
        {tweets.map((t, index) => (
          <Link key={index} href={`/tweets/${t.id}`}>
            <li className='flex flex-col gap-4 rounded-md ring-1 p-4 ring-orange-400'>
              <div className='flex justify-between *:text-sm'>
                <span className='uppercase font-semibold'>
                  {t.user.username}
                </span>
                <span>{formatTimeAgo(t.created_at.toString())}</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-lg uppercase font-semibold'>
                  {t.title}
                </span>
                <span className='text-md'>{t.description}</span>
              </div>
            </li>
          </Link>
        ))}
        <div className='flex gap-4 mt-4'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
            className='text-sm font-semibold bg-orange-500 w-fit px-3 py-2 rounded-md hover:opacity-90 disabled:opacity-50'
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage || isLoading}
            className='text-sm font-semibold bg-orange-500 w-fit px-3 py-2 rounded-md hover:opacity-90 disabled:opacity-50'
          >
            Next
          </button>
          {isLoading && <span className='mt-4'>Loading...</span>}
        </div>
      </ul>
    </>
  );
}
