import { GridColDef } from "@mui/x-data-grid"

/**
 * Type definitions for the Compare Data Task Flow config object
 */
export interface SearchDataRepositoriesConfig {
  /** Attributes that are used across the Task Flow */
  properties?: Record<string, any>,
  data: {
    items: {
      source: string,
      idField: string
    },
    [key: string]: {
      source: string,
      idField: string
    }
  },
  /** Cool pages */
  pages: {
    index: {
      title: string,
      description: string,
      cardFields: {
        title: string,
        content: string,
        tags: string
      },
      cardFilters: {
        field: string,
        displayName: string,
        filterType: 'CheckboxList' | 'Slider' | 'date range',
        props?: object
      }[]
    }
  }
}