import { Container, Typography, Box, Button } from '@mui/material';

import Link from '../components/Link';

export default function Index() {
  return (
    <>
      <Box>
        <Container maxWidth='md' sx={{ py: 8 }}>
          <Typography variant='overline'>Hi there, I'm</Typography>
          <Typography variant='h4' component='h2'>
            Robert Shepley
          </Typography>
          <Typography variant='body1'>
            I'm a software developer, and I love a good challenge.
          </Typography>
          <Typography variant='body1'>
            Want to know more? Check out my{' '}
            <Link href='/projects'>projects</Link>, my{' '}
            <Link href='/blog'>blog</Link>, or read{' '}
            <Link href='/about'>my story</Link>.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
