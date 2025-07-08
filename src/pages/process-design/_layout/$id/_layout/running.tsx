import {
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { AppLink } from '../../../../../components/AppLink';

export const Route = createFileRoute(
  '/process-design/_layout/$id/_layout/running'
)({
  component: RunningOptimizationPage,
});

/**
 * Page to show while optimization is running and after it completes.
 * Continuing after completion, this page takes users to the `<OptimizationResults>` page.
 */
function RunningOptimizationPage() {
  const [running, setRunning] = useState(true);

  /**
   * Simulate the time it takes to run the optimization
   */
  useEffect(() => {
    setTimeout(() => {
      setRunning(false);
    }, 3000);
  });

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
        <Stepper activeStep={1} sx={{ maxWidth: 850 }}>
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
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
        }}
      >
        <Paper sx={{ padding: 6, textAlign: 'center' }}>
          {running && (
            <Stack spacing={6}>
              <Typography variant="h6" component="h2">
                Running Process Optimization
              </Typography>
              <Box color="neutral.dark">
                <Typography>
                  Solving the superstructure optimization problem...
                </Typography>
                <Typography>
                  This may take several minutes depending on problem complexity.
                </Typography>
              </Box>
              <LinearProgress variant="indeterminate" sx={{ height: 10 }} />
              <Typography color="neutral.dark">
                Started: {new Date().toLocaleString()}
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  Solver: GAMS/CPLEX
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Objective: Minimize Total Cost
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Variables: 1,247 | Constraints: 892
                </Typography>
              </Stack>
            </Stack>
          )}
          {!running && (
            <Stack spacing={6}>
              <Typography variant="h6" component="h2">
                Optimization Complete
              </Typography>
              <Box color="neutral.dark">
                <Typography>Your process optimization results are ready to view.</Typography>
                <Typography color="success.main" fontWeight="bold">
                  Optimal solution found!
                </Typography>
              </Box>
              <AppLink to="/process-design/$id/results" params={{ id: 'new' }}>
                <Button
                  variant="contained"
                  size="large"
                  data-testid="pd-results-button"
                >
                  View Optimization Results
                </Button>
              </AppLink>
              <Typography color="neutral.dark">
                Started: {new Date(Date.now() - 180000).toLocaleString()}<br/>
                Completed: {new Date().toLocaleString()}<br/>
                Solve Time: 3.2 minutes
              </Typography>
            </Stack>
          )}
        </Paper>
      </Container>
    </Stack>
  );
}

export default RunningOptimizationPage;