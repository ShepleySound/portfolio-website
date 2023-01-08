import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import Link from './Link';

export default function Header() {
  return (
    <AppBar position='sticky' color='white' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'xs' }}>
        <Link href='/' underline='none' color='#242424'>
          <Typography variant='h6' component='h1' lineHeight={1}>
            Shepley
          </Typography>
        </Link>
        <Box>
          <Link href='/projects' color='black' underline='none' sx={{ mx: 2 }}>
            Projects
          </Link>
          <Link href='/about' color='black' underline='none' sx={{ mx: 2 }}>
            My Story
          </Link>
          <Link href='/blog' color='black' underline='none' sx={{ mx: 2 }}>
            Blog
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
