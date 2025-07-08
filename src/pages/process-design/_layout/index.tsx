import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { NewProcessModal } from '../-components/NewProcessModal';
import { useProcessDesign } from '../-context/ContextProvider';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/process-design/_layout/')({
  component: ProcessListPage,
});

/**
 * List page for all process design projects.
 * Can open the `<NewProcessModal>` from here and then proceed to the
 * `<ProcessDiagram>` component for the next step.
 */
function ProcessListPage() {
  const { state } = useProcessDesign();
  const [modalOpen, setModalOpen] = useState(false);

  const handleNewProcess = () => {
    setModalOpen(true);
  };

  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
        }}
      >
        <Paper>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Box flex={1}>
              <Typography variant="h6" component="h1">
                Process Design Projects
              </Typography>
              <Typography variant="subtitle1" component="p">
                Design and optimize chemical process superstructures for various feedstocks and target products.
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleNewProcess}
              data-testid="pd-new-button"
            >
              New Process Design
            </Button>
            <NewProcessModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </Stack>
          <DataGrid
            rows={state.list.table.data}
            getRowId={(row) => row[state.list.table.dataIdField]}
            columns={state.list.table.columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Container>
    </Box>
  );
}