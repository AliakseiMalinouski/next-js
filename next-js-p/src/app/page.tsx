import Link from "next/link";
import {  } from 'tailwindcss';

export default function Home() {
  return (
    <div className='flex gap-4'>
      <Link href='/scale'>Scale</Link>
      <Link href='/reliability'>Reliability</Link>
      <Link href='/performance'>Performance</Link>
    </div>
  );
}
