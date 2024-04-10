import { Box, Button, Container, Link, Paper, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { useCompareData } from './context/ContextProvider';
import { setComparing } from './context/actions';

/**
 * Page for filling out a form for adding a new item to 
 * the main list in the compare-data Task Flow.
 */
export const NewScenario: React.FC = () => {
  const { state, dispatch } = useCompareData();

  /**
   * Set comparing to true whenever this page renders.
   * Set it back to false when the component is torn down.
   */
  useEffect(() => {
    dispatch(setComparing(true));
    return () => {
      dispatch(setComparing(false))
    }
  }, []);
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <PageHeader
        // strudel-kit-variable-next-line
        pageTitle="New Scenario"
        // strudel-kit-variable-next-line
        description="Add a new scenario to compare to the others in your list."
        actions={
          <Stack direction="row">
            <Box>
              <Link component={RouterLink} to="..">
                <Button variant="contained" color="warning">
                  Cancel
                </Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to="..">
                <Button variant="contained">
                  Save Scenario
                </Button>
              </Link>
            </Box>
          </Stack>
        }
        sx={{
          padding: 3,
          backgroundColor: 'white',
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Paper
          sx={{
            padding: 2,
          }}
        >
          {/* TODO: add form */}
          Work in progress
        </Paper>
      </Container>
    </Box>
  );
}