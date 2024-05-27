'use client';

import { useFormStatus } from 'react-dom';

interface IButtonProps {
  text: string;
}

export default function Button({ text }: IButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button className='p-4 flex justify-center items-center w-full bg-orange-500 text-white font-medium rounded-full hover:bg-orange-400 transition-colors; h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed'>
      {pending ? 'Loading...' : text}
    </button>
  );
}
