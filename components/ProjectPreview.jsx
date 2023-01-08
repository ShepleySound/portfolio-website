import { Container, Box, Typography } from '@mui/material';

export default function ProjectPreview({ image, title, description, tags }) {
  return (
    <Box sx={{ borderRadius: 2, border: '1px solid black' }}>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}
