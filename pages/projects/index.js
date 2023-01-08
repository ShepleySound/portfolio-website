import { Container, Box, Grid, Typography } from '@mui/material';
import ProjectPreview from '../../components/ProjectPreview';

const projects = [
  {
    id: 1,
    title: 'Library of Things',
    description:
      'A social media/item sharing application with live chat functionality.',
    tags: ['React', 'Next.js', 'Supabase'],
  },
];
export default function Projects() {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h2'>Projects</Typography>
      <Grid container>
        {projects.map((project) => (
          <Grid item key={project.id}>
            <ProjectPreview {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
