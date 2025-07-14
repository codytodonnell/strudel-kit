import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import { PageHeader } from '../../../components/PageHeader';
import { SciDataGrid } from '../../../components/SciDataGrid';
import { AppLink } from '../../../components/AppLink';
import { createFileRoute } from '@tanstack/react-router';
import { useCompareData } from '../-context/ContextProvider';
import { setSelectedRows } from '../-context/actions';

export const Route = createFileRoute('/compare-produced-water/_layout/')({
  component: ProducedWaterRunList,
});

function ProducedWaterRunList() {
  const { state, dispatch } = useCompareData();

  return (
    <Box>
      <PageHeader
        pageTitle="Produced Water Simulation Runs"
        description="Select runs to compare their parameter values."
        actions={
          <Stack direction="row">
            <Box>
              {state.selectedRows.length < 2 && (
                <Button
                  variant="outlined"
                  disabled
                  data-testid="cpd-compare-button"
                >
                  Compare runs
                </Button>
              )}
              {state.selectedRows.length > 1 && (
                <AppLink to="/compare-produced-water/compare">
                  <Button variant="contained" data-testid="cpd-compare-button">
                    Compare runs ({state.selectedRows.length})
                  </Button>
                </AppLink>
              )}
            </Box>
          </Stack>
        }
        sx={{ padding: 3, backgroundColor: 'white' }}
      />
      <Container maxWidth="xl" sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Paper>
          <SciDataGrid
            rows={state.data}
            getRowId={(row) => row[state.dataIdField]}
            columns={state.columns}
            checkboxSelection
            rowSelectionModel={state.selectedRows}
            onRowSelectionModelChange={(rows) =>
              dispatch(setSelectedRows(rows))
            }
            disableRowSelectionOnClick
            disableDensitySelector
            disableColumnFilter
            initialState={{
              pagination: { paginationModel: { page: 1, pageSize: 25 } },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            sx={{
              '& .MuiDataGrid-toolbarContainer': {
                padding: 2,
                paddingBottom: 0,
              },
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}
