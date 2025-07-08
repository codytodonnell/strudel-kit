import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { AppLink } from '../../../../../components/AppLink';
import { useProcessDesign } from '../../../-context/ContextProvider';
import {
  setOptimizationTableData,
  setResultsBarChartData,
  setResultsLineChartData,
} from '../../../-context/actions';
import { useDataFromSource } from '../../../../../hooks/useDataFromSource';

export const Route = createFileRoute(
  '/process-design/_layout/$id/_layout/results'
)({
  component: OptimizationResultsPage,
});

/**
 * Results page to display after optimization completes.
 * Shows optimal process configuration, economic analysis, and performance metrics.
 */
function OptimizationResultsPage() {
  const { state, dispatch } = useProcessDesign();
  const tableData = useDataFromSource('dummy-data/optimization_results.json');
  const lineData = useDataFromSource('dummy-data/process_performance.json');
  const barData = useDataFromSource('dummy-data/cost_breakdown.json');

  /**
   * Set data for the results when the data loads
   */
  useEffect(() => {
    if (!state.optimization.table.data || state.optimization.table.data.length === 0) {
      dispatch(setOptimizationTableData(tableData));
    }
  }, [tableData]);

  useEffect(() => {
    if (
      !state.results.lineChart.data ||
      state.results.lineChart.data.length === 0
    ) {
      dispatch(setResultsLineChartData(lineData));
    }
  }, [lineData]);

  useEffect(() => {
    if (
      !state.results.barChart.data ||
      state.results.barChart.data.length === 0
    ) {
      dispatch(setResultsBarChartData(barData));
    }
  }, [barData]);

  // Key performance indicators
  const kpis = [
    { label: 'Total Cost', value: '$2.45M/year', change: '-12%', color: 'success' },
    { label: 'REE Recovery', value: '94.2%', change: '+8%', color: 'success' },
    { label: 'Energy Consumption', value: '1.2 GJ/kg REE', change: '-15%', color: 'success' },
    { label: 'Environmental Impact', value: '0.8 kg CO₂/kg REE', change: '-22%', color: 'success' },
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
        <Stepper activeStep={2} sx={{ maxWidth: 850 }}>
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
            Results Categories
          </Typography>
          <Typography
            component="li"
            sx={{
              backgroundColor: '#D9EEFE',
              borderRight: '4px solid',
              borderColor: 'primary.main',
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Summary
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Process Configuration
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Economic Analysis
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Environmental Impact
          </Typography>
        </Stack>
        <Box flex={1}>
          <Container
            maxWidth="xl"
            sx={{
              mt: 4,
            }}
          >
            {/* KPI Cards */}
            <Grid container spacing={2} sx={{ marginBottom: 3 }}>
              {kpis.map((kpi, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="h3">
                        {kpi.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {kpi.label}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color={`${kpi.color}.main`}
                        sx={{ fontWeight: 'bold' }}
                      >
                        {kpi.change} vs baseline
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Paper>
                  <Plot 
                    data={state.results.lineChart.data || [
                      {
                        x: ['Shredding', 'Magnetic Sep', 'Acid Leaching', 'Solvent Ext', 'Precipitation'],
                        y: [98, 95, 92, 94, 94],
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Recovery Rate (%)',
                        line: { color: '#1976d2' }
                      }
                    ]} 
                    layout={{
                      title: 'Recovery Rate by Process Step',
                      xaxis: { title: 'Process Step' },
                      yaxis: { title: 'Recovery Rate (%)' },
                      height: 300
                    }} 
                  />
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper>
                  <Plot 
                    data={state.results.barChart.data || [
                      {
                        x: ['Equipment', 'Operating', 'Raw Materials', 'Utilities', 'Labor'],
                        y: [850, 620, 480, 320, 180],
                        type: 'bar',
                        name: 'Cost Breakdown',
                        marker: { color: '#1976d2' }
                      }
                    ]} 
                    layout={{
                      title: 'Annual Cost Breakdown',
                      xaxis: { title: 'Cost Category' },
                      yaxis: { title: 'Cost (k$/year)' },
                      height: 300
                    }} 
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <DataGrid
                    rows={state.optimization.table.data || [
                      { id: 1, variable: 'Shredder Capacity', optimalValue: 500, unit: 'kg/h', lowerBound: 100, upperBound: 1000 },
                      { id: 2, variable: 'Acid Concentration', optimalValue: 2.5, unit: 'M', lowerBound: 1.0, upperBound: 5.0 },
                      { id: 3, variable: 'Extraction Temperature', optimalValue: 65, unit: '°C', lowerBound: 40, upperBound: 80 },
                      { id: 4, variable: 'Solvent Flow Rate', optimalValue: 150, unit: 'L/min', lowerBound: 50, upperBound: 300 },
                    ]}
                    getRowId={(row) => row[state.optimization.table.dataIdField]}
                    columns={state.optimization.table.columns}
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
          width: '100%',
        }}
      >
        <AppLink to="/process-design/$id/solver" params={{ id: 'new' }}>
          <Button variant="contained">Back to Solver Settings</Button>
        </AppLink>
      </Box>
    </Stack>
  );
}