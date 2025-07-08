import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AppLink } from '../../../../components/AppLink';

export const Route = createFileRoute('/process-design/_layout/$id/_layout')({
  component: ProcessDesignStepsLayout,
});

/**
 * Wrapper component for the steps involved in process design.
 * This goes from `<ProcessDiagram>` to `<SolverSettings>` to `<OptimizationRunning>` to `<OptimizationResults>`.
 * These inner steps are rendered by the `<Outlet>` component.
 */
function ProcessDesignStepsLayout() {
  return (
    <Stack spacing={0} height="100vh">
      <Box>
        <AppBar
          color="default"
          position="static"
          sx={{
            backgroundColor: 'white',
            borderBottom: '1px solid',
            borderColor: 'neutral.main',
          }}
        >
          <Toolbar variant="dense">
            <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
              >
                <AppLink
                  underline="hover"
                  color="inherit"
                  to="/process-design"
                  data-testid="pd-list-link"
                >
                  Process Design Projects
                </AppLink>
                <Typography color="text.primary">
                  Rare Earth Element Extraction
                </Typography>
              </Breadcrumbs>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Stack>
  );
}

export default ProcessDesignStepsLayout;