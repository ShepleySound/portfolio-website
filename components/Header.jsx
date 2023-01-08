import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
// import Link from './Link';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky w-screen'>
      <nav className='justify-between max-w-2xl mx-auto flex w-full px-2 py-4'>
        <Link href='/' className='mx-1 py-1 px-2 rounded-md hover:bg-slate-100'>
          Shepley
        </Link>
        <div>
          <Link
            href='/projects'
            className='mx-1 py-1 px-2 rounded-md hover:bg-slate-100'
          >
            Projects
          </Link>
          <Link
            href='/about'
            className='mx-1 py-1 px-2 rounded-md hover:bg-slate-100'
          >
            My Story
          </Link>
          <Link
            href='/blog'
            className='mx-1 py-1 px-2 rounded-md hover:bg-slate-100'
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
