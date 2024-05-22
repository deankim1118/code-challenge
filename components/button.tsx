'use client';

import { useFormStatus } from 'react-dom';

interface IButtonProps {
  text: string;
  disabled: boolean;
}

export default function Button({ text, disabled }: IButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={disabled || pending}
      className='w-full bg-orange-500 text-white font-medium rounded-full text-center hover:bg-orange-400 transition-colors; h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed'
    >
      {pending ? 'Loading...' : text}
    </button>
  );
}
