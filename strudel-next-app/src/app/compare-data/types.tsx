import { GridColDef } from "@mui/x-data-grid";

export type CompareDataGridColDef = GridColDef & {
  isComparisonMetric?: boolean;
}