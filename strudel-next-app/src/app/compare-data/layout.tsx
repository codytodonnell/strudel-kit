'use client'

import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { TopBar } from '../../components/TopBar';
import { useDataFromSource } from '../../utils/useDataFromSource';
import { CompareDataProvider } from './context/ContextProvider';
import definitions from './definitions.json';
import { basename } from '../layout';

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
const CompareDataWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  // strudel-kit-variable-next-line
  const scenarios = useDataFromSource('default/compare-data/scenarios.json', basename);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        {/* strudel-kit-variable-next-line */}
        <CompareDataProvider 
          data={scenarios || []} 
          columns={definitions.columns.list.table} 
          dataIdField='id'
        >
          {children}
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export default CompareDataWrapper;