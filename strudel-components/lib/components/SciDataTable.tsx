import { Box, Chip, Grid, Popover, Stack, Typography } from '@mui/material';
import { DataGrid, DataGridProps, GridColDef, GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { hasValue } from './FilterField';
import { ArrayWithPopover } from './ArrayWithPopover';
import { Formula } from './Formula';

export type SciDataTableColDef = GridColDef & {
  units?: string;
  decimals?: number;
  sigFigs?: number;
  isFormula?: boolean;
}

interface SciDataTableProps extends Omit<DataGridProps, 'columns'> {
  columns: SciDataTableColDef[];
}

const getGridColumns = (columns: SciDataTableColDef[]) => {
  return columns.map((column) => {
    const { 
      units,
      decimals,
      sigFigs,
      isFormula,
      ...gridColumn 
    } = column;

    /** Render unit label underneath the headerName */
    if (units) {
      gridColumn.renderHeader = (params: GridColumnHeaderParams) => (
        <Stack>
          <Typography fontSize="0.875rem" fontWeight="bold">{params.colDef.headerName}</Typography>
          <Typography fontSize="small" color="grey.700">{units}</Typography>
        </Stack>
      )
    }
    
    /** Handle value transformation options */
    if (!gridColumn.valueFormatter) {
      gridColumn.valueFormatter = (value: number) => {
        /** Empty cells should render as '-' */
        if (!hasValue(value)) {
          return '-'
        /** 
         * Round display values to nearest n decimals.
         * Exactly zero should display as just 0.
         * Values that would require more decimals to display
         * a non-zero digit should display "> 0.001" (decimals would be based on decimals value).
         */
        } else if (!isNaN(value) && decimals || decimals === 0) {
          if (value === 0) {
            return value;
          } else if (value < (1 / Math.pow(10, decimals))) {
            return `> ${1 / Math.pow(10, decimals)}`
          } else {
            return value.toLocaleString(undefined, { 
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            });
          }
        /** 
         * Round display values to a certain number of significant figures
         * and convert to scientific notation. 
         */
        } else if (!isNaN(value) && sigFigs) {
          return value.toPrecision(sigFigs);
        } else {
          return value.toLocaleString();
        }
      }
    }

    /** Handle value transformation options */
    if (!gridColumn.renderCell) {
      gridColumn.renderCell = (params: GridRenderCellParams) => {
        if (Array.isArray(params.value)) {
          return (
            <ArrayWithPopover values={params.value} />
          )
        } if (isFormula) {
          return <Formula content={params.value} />
        } else {
          return params.formattedValue;
        }
      }
    }

    return gridColumn;
  })
}

export const SciDataTable: React.FC<SciDataTableProps> = ({
  rows,
  columns,
}) => { 
  return (
    <DataGrid
      rows={rows}
      columns={getGridColumns(columns)}
      disableColumnSelector
      initialState={{
        pagination: { paginationModel: { page: 0, pageSize: 5 } }
      }}
      sx={{
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold'
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none'
        },
        '& .MuiDataGrid-overlayWrapper': {
          minHeight: '4rem'
        }
      }}
    />
  )
}