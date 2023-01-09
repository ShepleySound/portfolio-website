import Link from 'next/link';
import { Container } from './Container';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Copyright() {
  return (
    <span className='items-center text-sm text-zinc-400 dark:text-zinc-500'>
      &copy; <Link href='/'>Robert Shepley</Link> {new Date().getFullYear()}
    </span>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className='mt-32'>
      <Container.Outer>
        <div className='border-t border-zinc-100 pt-10 pb-10 dark:border-zinc-700/40'>
          <Container.Inner>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                <SocialLink
                  icon={FaLinkedin}
                  href='https://www.linkedin.com/in/robert-shepley'
                />
                <SocialLink
                  icon={FaGithub}
                  href='https://www.github.com/shepleysound'
                />
              </div>
              <Copyright />
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
