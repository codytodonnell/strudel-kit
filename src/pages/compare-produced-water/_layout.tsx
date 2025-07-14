import { Box } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useDataFromSource } from '../../hooks/useDataFromSource';
import { CompareDataProvider } from '../compare-data/-context/ContextProvider';

export const Route = createFileRoute('/compare-produced-water/_layout')({
  component: CompareProducedWaterWrapper,
});

/**
 * Top-level wrapper for the compare-produced-water Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
function CompareProducedWaterWrapper() {
  // Produced water simulation runs data source
  const runs = useDataFromSource('dummy-data/produced_water_runs.json');

  // Columns for produced water simulation comparison
  const columns = [
    { field: 'run_name', headerName: 'Run Name', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'operator', headerName: 'Operator', width: 150 },
    {
      field: 'flow_rate',
      headerName: 'Flow Rate (m3/d)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'tss',
      headerName: 'TSS (mg/L)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'cod',
      headerName: 'COD (mg/L)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'tkn',
      headerName: 'TKN (mg/L)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'acetic_acid',
      headerName: 'Acetic Acid (mg/L)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'cost',
      headerName: 'Cost ($/m3)',
      width: 150,
      isComparisonMetric: true,
    },
    {
      field: 'energy',
      headerName: 'Energy (kWh/m3)',
      width: 150,
      isComparisonMetric: true,
    },
  ];

  return (
    <Box>
      <CompareDataProvider data={runs || []} columns={columns} dataIdField="id">
        <Outlet />
      </CompareDataProvider>
    </Box>
  );
}
