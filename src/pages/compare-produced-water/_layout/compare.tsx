import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { useEffect } from 'react';
import { PageHeader } from '../../../components/PageHeader';
import { DataGrid } from '@mui/x-data-grid';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../components/AppLink';
import { setComparing } from '../-context/actions';
import { useCompareData } from '../-context/ContextProvider';

export const Route = createFileRoute('/compare-produced-water/_layout/compare')(
  {
    component: ProducedWaterComparison,
  }
);

function ProducedWaterComparison() {
  const { state, dispatch } = useCompareData();

  useEffect(() => {
    dispatch(setComparing(true));
    return () => {
      dispatch(setComparing(false));
    };
  }, []);

  return (
    <Box>
      <PageHeader
        pageTitle="Compare Produced Water Simulation Runs"
        description="Parameter values for selected runs are shown side-by-side."
        actions={
          <Stack direction="row">
            <Box>
              <AppLink to="..">
                <Button variant="contained" startIcon={<ArrowBackIcon />}>
                  Back to runs
                </Button>
              </AppLink>
            </Box>
          </Stack>
        }
        sx={{ padding: 3, backgroundColor: 'white' }}
      />
      <Container maxWidth="xl" sx={{ marginTop: 3, marginBottom: 3 }}>
        <Paper
          sx={{
            '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
              borderRight: '1px solid',
              borderRightColor: 'neutral.main',
            },
            '& .compare-data--metric': { fontWeight: 'bold' },
          }}
        >
          {state.comparing && (
            <DataGrid
              rows={state.comparisonData}
              getRowId={(row) => row.metric!}
              columns={state.comparisonColumns}
              disableRowSelectionOnClick
              disableDensitySelector
              disableColumnFilter
            />
          )}
        </Paper>
      </Container>
    </Box>
  );
}
