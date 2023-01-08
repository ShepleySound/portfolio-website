import * as React from 'react';
import Link from 'next/link';

export default function Copyright() {
  return (
    <span className='items-center'>
      {'Copyright © '}
      <Link href='/'>Robert Shepley</Link> {new Date().getFullYear()}.
    </span>
  );
}
