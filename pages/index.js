import Head from 'next/head';
import Link from 'next/link';

import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { Container } from '../components/Container';
import Button from '../components/Button';

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Shepley</title>
        <meta name='description' content='Insert about content here' />
      </Head>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Software Developer, audio engineer, cat enthusiast
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I&apos;m Robert Shepley, a software developer based in Seattle,
            Washington. I was an audio engineer with the US Army Bands for 6
            years, and I currently volunteer with various local nonprofits as a
            web developer.
          </p>
          <div className='mt-6 flex gap-6 md:items-center flex-col md:flex-row max-w-xl'>
            <div className='flex gap-6 '>
              <SocialLink
                href='https://linkedin.com/in/robert-shepley'
                aria-label='LinkedIn Profile'
                icon={FaLinkedin}
              />
              <SocialLink
                href='https://www.github.com/shepleysound'
                aria-label='GitHub Profile'
                icon={FaGithub}
              />
            </div>
            <Button
              href='https://docs.google.com/document/d/1BBjHAhQYGF8ll7YENFTRrcr8CgKEh6Z8E-uO3rAkIYw/edit?usp=sharing'
              variant='secondary'
              className='group w-full'
            >
              Resume
              <FaArrowDown className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
