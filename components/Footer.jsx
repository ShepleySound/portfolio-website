import { Box, Divider, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import Copyright from './Copyright';

export default function Footer() {
  return (
    <Box component='footer' sx={{ mt: 'auto' }}>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <IconButton>
            <GitHub htmlColor='#121212' />
          </IconButton>
          <IconButton>
            <LinkedIn htmlColor='#121212' />
          </IconButton>
        </Box>
        <Copyright />
      </Box>
    </Box>
  );
}
