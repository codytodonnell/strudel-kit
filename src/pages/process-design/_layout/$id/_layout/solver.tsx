import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import { AppLink } from '../../../../../components/AppLink';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/process-design/_layout/$id/_layout/solver'
)({
  component: SolverSettingsPage,
});

/**
 * Page to configure solver settings for process optimization.
 * Allows selection of different solvers and optimization parameters.
 */
function SolverSettingsPage() {
  const [selectedSolver, setSelectedSolver] = useState('');
  const [objective, setObjective] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced);
  };

  // Available solvers for chemical process optimization
  const solvers = [
    {
      name: 'GAMS/CPLEX',
      type: 'MILP',
      description: 'Mixed-Integer Linear Programming solver, excellent for discrete decisions',
      capabilities: ['Linear', 'Mixed-Integer', 'Large-scale'],
    },
    {
      name: 'GAMS/BARON',
      type: 'Global',
      description: 'Global optimization solver for non-convex problems',
      capabilities: ['Nonlinear', 'Global Optimization', 'Non-convex'],
    },
    {
      name: 'GAMS/IPOPT',
      type: 'NLP',
      description: 'Interior Point Optimizer for large-scale nonlinear optimization',
      capabilities: ['Nonlinear', 'Large-scale', 'Continuous'],
    },
    {
      name: 'GAMS/SCIP',
      type: 'MINLP',
      description: 'Solving Constraint Integer Programs for mixed-integer nonlinear problems',
      capabilities: ['Mixed-Integer', 'Nonlinear', 'Open-source'],
    },
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
        maxWidth="lg"
        sx={{
          mt: 4,
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Paper sx={{ padding: 3 }}>
              <Stack spacing={3}>
                <Typography variant="h6" component="h2">
                  Optimization Settings
                </Typography>
                
                <Grid container spacing={2} alignItems="center">
                  <Grid item md={3}>
                    <Typography>Objective Function</Typography>
                  </Grid>
                  <Grid item md={9}>
                    <FormControl fullWidth>
                      <InputLabel>Select Objective</InputLabel>
                      <Select
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                      >
                        <MenuItem value="minimize_cost">Minimize Total Cost</MenuItem>
                        <MenuItem value="maximize_recovery">Maximize REE Recovery</MenuItem>
                        <MenuItem value="minimize_environmental">Minimize Environmental Impact</MenuItem>
                        <MenuItem value="maximize_profit">Maximize Profit</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={3}>
                    <Typography>Solver</Typography>
                  </Grid>
                  <Grid item md={9}>
                    <FormControl fullWidth>
                      <InputLabel>Select Solver</InputLabel>
                      <Select
                        value={selectedSolver}
                        onChange={(e) => setSelectedSolver(e.target.value)}
                      >
                        {solvers.map((solver) => (
                          <MenuItem key={solver.name} value={solver.name}>
                            {solver.name} ({solver.type})
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={3}>
                    <Typography>Time Limit</Typography>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      label="Time Limit (seconds)"
                      variant="outlined"
                      fullWidth
                      defaultValue="3600"
                    />
                  </Grid>

                  <Grid item md={3}>
                    <Typography>Optimality Gap</Typography>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      label="Optimality Gap (%)"
                      variant="outlined"
                      fullWidth
                      defaultValue="1.0"
                    />
                  </Grid>
                </Grid>

                <Box>
                  <Button onClick={handleAdvancedToggle}>
                    {showAdvanced ? 'Hide' : 'Show'} advanced settings
                  </Button>
                </Box>

                {showAdvanced && (
                  <Grid container spacing={2} alignItems="center">
                    <Grid item md={3}>
                      <Typography>Iteration Limit</Typography>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        label="Maximum Iterations"
                        variant="outlined"
                        fullWidth
                        defaultValue="10000"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <Typography>Tolerance</Typography>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        label="Convergence Tolerance"
                        variant="outlined"
                        fullWidth
                        defaultValue="1e-6"
                      />
                    </Grid>
                  </Grid>
                )}

                <Box textAlign="right">
                  <AppLink to="/process-design/$id/running" params={{ id: 'new' }}>
                    <Button
                      variant="contained"
                      data-testid="pd-run-button"
                      sx={{ marginTop: 2 }}
                    >
                      Run Optimization
                    </Button>
                  </AppLink>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item md={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Available Solvers
              </Typography>
              <Stack spacing={2}>
                {solvers.map((solver) => (
                  <Card
                    key={solver.name}
                    sx={{
                      cursor: 'pointer',
                      border: selectedSolver === solver.name ? '2px solid' : '1px solid',
                      borderColor: selectedSolver === solver.name ? 'primary.main' : 'grey.300',
                    }}
                    onClick={() => setSelectedSolver(solver.name)}
                  >
                    <CardContent sx={{ padding: '12px !important' }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {solver.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {solver.description}
                      </Typography>
                      <Box sx={{ marginTop: 1 }}>
                        {solver.capabilities.map((cap) => (
                          <Chip
                            key={cap}
                            label={cap}
                            size="small"
                            sx={{ marginRight: 0.5, marginBottom: 0.5 }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}