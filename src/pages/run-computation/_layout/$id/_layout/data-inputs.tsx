import { useCallback, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Edge,
  Node,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
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
} from '@mui/material';
import { useRunComputation } from '../../../-context/ContextProvider';
import { setInputsTableData } from '../../../-context/actions';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../../../../components/AppLink';

export const Route = createFileRoute(
  '/run-computation/_layout/$id/_layout/data-inputs'
)({
  component: DataInputsPage,
});

interface DiagramData {
  nodes: Node[];
  edges: Edge[];
}

/**
 * Page to display input data after creating or selecting an item from
 * the `<ComputationsList>` page in the run-computation Task Flow.
 * Table columns are configured in `definitions.inputs.table.columns`
 */
function ProcessDiagramBuilder({
  value,
  onChange,
}: {
  value: DiagramData;
  onChange: (data: DiagramData) => void;
}) {
  // value: { nodes, edges }
  const [nodes, , onNodesChange] = useNodesState(value?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(value?.edges || []);

  useEffect(() => {
    if (onChange) {
      onChange({ nodes, edges });
    }
  }, [nodes, edges]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: 600 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

const exampleDiagram: DiagramData = {
  nodes: [
    {
      id: '1',
      type: 'input',
      position: { x: 100, y: 100 },
      data: { label: 'Shredding' },
    },
    {
      id: '2',
      type: 'default',
      position: { x: 350, y: 100 },
      data: { label: 'Magnetic Separation' },
    },
    {
      id: '3',
      type: 'default',
      position: { x: 600, y: 100 },
      data: { label: 'Leaching' },
    },
    {
      id: '4',
      type: 'output',
      position: { x: 850, y: 100 },
      data: { label: 'Rare Earth Extraction' },
    },
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
  ],
};

function DataInputsPage() {
  const { state, dispatch } = useRunComputation();
  // Store diagram data in state.inputs.table.data as { nodes, edges }
  let diagramData: DiagramData = state.inputs.table.data?.[0] || {
    nodes: [],
    edges: [],
  };

  // Preload example if empty
  if (!diagramData.nodes.length && !diagramData.edges.length) {
    diagramData = exampleDiagram;
    dispatch(setInputsTableData([exampleDiagram]));
  }

  const handleDiagramChange = (data: DiagramData) => {
    dispatch(setInputsTableData([data]));
  };

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
          <Step key="Data Inputs">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/data-inputs"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Process Diagram
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Optimization Settings">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/settings"
                params={{ id: 'new' }}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                Optimization Settings
              </AppLink>
            </StepLabel>
          </Step>
          <Step key="Results">
            <StepLabel>
              <AppLink
                to="/run-computation/$id/results"
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
            Categories
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
            Process Units
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Streams
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: '1rem 2rem',
              marginLeft: '-2rem !important',
              marginRight: '-2rem !important',
            }}
          >
            Costing
          </Typography>
        </Stack>
        <Box flex={1} sx={{ overflow: 'hidden' }}>
          <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Paper>
              <ProcessDiagramBuilder
                value={diagramData}
                onChange={handleDiagramChange}
              />
            </Paper>
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
        <AppLink to="/run-computation/$id/settings" params={{ id: 'new' }}>
          <Button variant="contained" data-testid="rnc-settings-next-button">
            Continue to Optimization Settings
          </Button>
        </AppLink>
      </Box>
    </Stack>
  );
}
