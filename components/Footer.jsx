import { Divider, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <Divider />
      <div className='flex flex-col items-center justify-center'>
        <div>
          <IconButton>
            <GitHub htmlColor='#121212' />
          </IconButton>
          <IconButton>
            <LinkedIn htmlColor='#121212' />
          </IconButton>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
