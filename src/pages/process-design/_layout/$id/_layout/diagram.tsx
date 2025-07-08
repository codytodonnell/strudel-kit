import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDataFromSource } from '../../../../../hooks/useDataFromSource';
import { useProcessDesign } from '../../../-context/ContextProvider';
import { setDiagramTableData } from '../../../-context/actions';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../../../components/AppLink';

export const Route = createFileRoute(
  '/process-design/_layout/$id/_layout/diagram'
)({
  component: ProcessDiagramPage,
});

/**
 * Page to display and build the process diagram/superstructure.
 * Shows available unit operations and allows building the process flow.
 */
function ProcessDiagramPage() {
  const { state, dispatch } = useProcessDesign();
  const diagramData = useDataFromSource('dummy-data/process_units.json');

  /**
   * Set data for the diagram table when the data loads
   */
  useEffect(() => {
    if (!state.diagram.table.data || state.diagram.table.data.length === 0) {
      dispatch(setDiagramTableData(diagramData));
    }
  }, [diagramData]);

  // Available unit operations for rare earth element extraction
  const unitOperations = [
    { name: 'Shredder', type: 'Size Reduction', description: 'Mechanical size reduction of hard drives' },
    { name: 'Magnetic Separator', type: 'Separation', description: 'Separate ferromagnetic materials' },
    { name: 'Acid Leaching', type: 'Chemical', description: 'Dissolve rare earth elements using acid' },
    { name: 'Solvent Extraction', type: 'Separation', description: 'Selective extraction of target elements' },
    { name: 'Precipitation', type: 'Chemical', description: 'Precipitate purified rare earth compounds' },
    { name: 'Calcination', type: 'Thermal', description: 'Convert to oxide form' },
  ];

  return (
    <Stack spacing={0} flex={1}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'neutral.main',
        }}
      >
        <Stepper activeStep={0} sx={{ maxWidth: 850 }}>
          <Step key="Process Diagram">
            <StepLabel>
              <AppLink
                to="/process-design/$id/diagram"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Process Diagram
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Solver Settings">
            <StepLabel>
              <AppLink
                to="/process-design/$id/solver"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Solver Settings
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Optimization Results">
            <StepLabel>
              <AppLink
                to="/process-design/$id/results"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Results
              </AppLink>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
      <Stack direction="row" spacing={0} flex={1}>
        <Stack
          component="ul"
          direction="column"
          spacing={0}
          sx={{
            backgroundColor: 'white',
            listStyle: 'none',
            margin: 0,
            padding: 4,
            width: 300,
          }}
        >
          <Typography
            component="li"
            fontWeight="bold"
            sx={{
              marginBottom: 2,
            }}
          >
            Unit Operations
          </Typography>
          {unitOperations.map((unit, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: 1,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              <CardContent sx={{ padding: '8px !important' }}>
                <Typography variant="body2" fontWeight="bold">
                  {unit.name}
                </Typography>
                <Chip label={unit.type} size="small" sx={{ marginTop: 0.5 }} />
                <Typography variant="caption" display="block" sx={{ marginTop: 0.5 }}>
                  {unit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Box flex={1} sx={{ overflow: 'hidden' }}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Paper sx={{ padding: 2, minHeight: 400 }}>
                  <Typography variant="h6" gutterBottom>
                    Process Superstructure Canvas
                  </Typography>
                  <Box
                    sx={{
                      border: '2px dashed',
                      borderColor: 'grey.300',
                      borderRadius: 1,
                      padding: 4,
                      textAlign: 'center',
                      minHeight: 300,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'grey.50',
                    }}
                  >
                    <Stack spacing={2} alignItems="center">
                      <Typography variant="h6" color="grey.600">
                        Drag and Drop Unit Operations Here
                      </Typography>
                      <Typography variant="body2" color="grey.500">
                        Build your process superstructure by dragging unit operations from the left panel
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={4}>
                <Paper sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Process Units in Diagram
                  </Typography>
                  <DataGrid
                    rows={state.diagram.table.data || []}
                    getRowId={(row) => row[state.diagram.table.dataIdField]}
                    columns={state.diagram.table.columns}
                    disableColumnSelector
                    disableRowSelectionOnClick
                    autoHeight
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: 'white',
          borderTop: '1px solid',
          borderColor: 'neutral.main',
          bottom: 0,
          padding: 2,
          position: 'fixed',
          textAlign: 'right',
          width: '100%',
        }}
      >
        <AppLink to="/process-design/$id/solver" params={{ id: 'new' }}>
          <Button variant="contained" data-testid="pd-solver-next-button">
            Continue to Solver Settings
          </Button>
        </AppLink>
      </Box>
    </Stack>
  );
}