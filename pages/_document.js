import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='h-full'>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: modeScript }} />
          <link
            rel='alternate'
            type='application/rss+xml'
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
          />
          <link
            rel='alternate'
            type='application/feed+json'
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
          />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body className='flex h-full flex-col bg-zinc-50 dark:bg-black '>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
