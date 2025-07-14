import { Box, Paper, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { PageHeader } from '../../components/PageHeader';

export const Route = createFileRoute('/explore-pokemon/')({
  component: PokemonExplorer,
});

function PokemonExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const filteredList = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <PageHeader
        pageTitle="Explore Pokemon"
        description="Browse and search the original 151 Pokemon. Click a name to view details."
        sx={{ marginBottom: 1, padding: 2 }}
      />
      <Stack direction="row">
        <Paper sx={{ flex: 1, minHeight: '600px', minWidth: 0, padding: 2 }}>
          <input
            type="text"
            placeholder="Search Pokemon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 16, width: '100%', padding: 8 }}
          />
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredList.map((pokemon) => (
              <li key={pokemon.name}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1976d2',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: 18,
                    padding: '8px 0',
                  }}
                  onClick={() => setSelectedPokemon(pokemon)}
                >
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </Paper>
        {selectedPokemon && (
          <Paper sx={{ minWidth: '400px', padding: 2, marginLeft: 2 }}>
            <PokemonDetails
              name={selectedPokemon.name}
              onClose={() => setSelectedPokemon(null)}
            />
          </Paper>
        )}
      </Stack>
    </Box>
  );
}

function PokemonDetails({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  const [details, setDetails] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [name]);

  if (!details) return <div>Loading...</div>;

  return (
    <Box>
      <button onClick={onClose} style={{ marginBottom: 16 }}>
        Close
      </button>
      <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
      <img src={details.sprites.front_default} alt={details.name} />
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <p>Types: {details.types.map((t: any) => t.type.name).join(', ')}</p>
      <p>
        Abilities:{' '}
        {details.abilities.map((a: any) => a.ability.name).join(', ')}
      </p>
    </Box>
  );
}
