import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/explore-pokemon/$name')({
  component: PokemonDetailPage,
});

function PokemonDetailPage() {
  const { name } = Route.useParams();
  const [details, setDetails] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [name]);

  return (
    <Box>
      <PageHeader
        pageTitle={
          details
            ? details.name.charAt(0).toUpperCase() + details.name.slice(1)
            : ''
        }
        breadcrumbTitle="Pokemon Detail"
        sx={{ marginBottom: 1, padding: 2 }}
      />
      <Container maxWidth="xl">
        <Stack>
          <Paper sx={{ padding: 2 }}>
            {details ? (
              <Stack>
                <Typography fontWeight="bold">Name</Typography>
                <Typography>
                  {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
                </Typography>
                <img
                  src={details.sprites.front_default}
                  alt={details.name}
                  style={{ width: 96, height: 96 }}
                />
                <Typography fontWeight="bold">Height</Typography>
                <Typography>{details.height}</Typography>
                <Typography fontWeight="bold">Weight</Typography>
                <Typography>{details.weight}</Typography>
                <Typography fontWeight="bold">Types</Typography>
                <Typography>
                  {details.types.map((t: any) => t.type.name).join(', ')}
                </Typography>
                <Typography fontWeight="bold">Abilities</Typography>
                <Typography>
                  {details.abilities.map((a: any) => a.ability.name).join(', ')}
                </Typography>
              </Stack>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
