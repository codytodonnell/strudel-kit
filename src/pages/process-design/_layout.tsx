import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useDataFromSource } from '../../hooks/useDataFromSource';
import { ProcessDesignProvider } from './-context/ContextProvider';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/process-design/_layout')({
  component: ProcessDesignLayout,
});

/**
 * Top-level wrapper for the process-design Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
function ProcessDesignLayout() {
  // Process design projects data source
  const listItems = useDataFromSource('dummy-data/process_projects.json');

  return (
    <Box>
      <Box>
        <ProcessDesignProvider
          list={{
            table: {
              data: listItems,
              dataIdField: 'id',
              columns: [
                {
                  field: 'name',
                  headerName: 'Process Name',
                  width: 250,
                },
                {
                  field: 'processType',
                  headerName: 'Process Type',
                  width: 200,
                },
                {
                  field: 'feedstock',
                  headerName: 'Feedstock',
                  width: 200,
                },
                {
                  field: 'targetProducts',
                  headerName: 'Target Products',
                  width: 200,
                },
                {
                  field: 'createdDate',
                  headerName: 'Date Created',
                  width: 150,
                },
                {
                  field: 'status',
                  headerName: 'Status',
                  width: 120,
                },
                {
                  field: 'actions',
                  headerName: 'Actions',
                  type: 'actions',
                  getActions: () => [
                    <GridActionsCellItem
                      icon={<ContentCopyIcon />}
                      label="Duplicate"
                    />,
                    <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
                    <GridActionsCellItem
                      icon={<DeleteIcon />}
                      label="Delete"
                    />,
                  ],
                  flex: 1,
                },
              ],
            },
          }}
          diagram={{
            table: {
              data: [],
              dataIdField: 'id',
              columns: [
                {
                  field: 'unitName',
                  headerName: 'Unit Name',
                  width: 200,
                },
                {
                  field: 'unitType',
                  headerName: 'Unit Type',
                  width: 150,
                },
                {
                  field: 'operatingTemp',
                  headerName: 'Operating Temp (°C)',
                  width: 150,
                  type: 'number',
                },
                {
                  field: 'operatingPressure',
                  headerName: 'Operating Pressure (bar)',
                  width: 150,
                  type: 'number',
                },
                {
                  field: 'capacity',
                  headerName: 'Capacity (kg/h)',
                  width: 150,
                  type: 'number',
                },
              ],
            },
          }}
          optimization={{
            table: {
              data: [],
              dataIdField: 'id',
              columns: [
                {
                  field: 'variable',
                  headerName: 'Variable',
                  width: 200,
                },
                {
                  field: 'optimalValue',
                  headerName: 'Optimal Value',
                  width: 150,
                  type: 'number',
                },
                {
                  field: 'unit',
                  headerName: 'Unit',
                  width: 100,
                },
                {
                  field: 'lowerBound',
                  headerName: 'Lower Bound',
                  width: 120,
                  type: 'number',
                },
                {
                  field: 'upperBound',
                  headerName: 'Upper Bound',
                  width: 120,
                  type: 'number',
                },
              ],
            },
          }}
        >
          <Outlet />
        </ProcessDesignProvider>
      </Box>
    </Box>
  );
}