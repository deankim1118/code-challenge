import { InputHTMLAttributes, SVGProps } from 'react';

interface IInputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  errors = [],
  name,
  children,
  ...props
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='relative flex flex-col gap-2'>
      <input
        name={name}
        className=' bg-transparent w-full h-12 py-6 px-12 focus:outline-none border-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400 transition rounded-full'
        {...props}
      />
      <i className='absolute left-3 top-3'>{children}</i>
      {errors.map((error, index) => (
        <span key={index} className='text-red-500 font-medium'>
          {error}
        </span>
      ))}
    </div>
  );
}
