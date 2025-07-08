import { ProcessDesignState } from './ContextProvider';

export enum ProcessDesignActionType {
  SET_LIST_TABLE_DATA = 'SET_LIST_TABLE_DATA',
  SET_DIAGRAM_TABLE_DATA = 'SET_DIAGRAM_TABLE_DATA',
  SET_OPTIMIZATION_TABLE_DATA = 'SET_OPTIMIZATION_TABLE_DATA',
  SET_RESULTS_LINECHART_DATA = 'SET_RESULTS_LINECHART_DATA',
  SET_RESULTS_BARCHART_DATA = 'SET_RESULTS_BARCHART_DATA',
}

export interface ProcessDesignAction {
  type: ProcessDesignActionType;
  payload?: any;
}

export const setListTableData = (
  data: ProcessDesignState['list']['table']['data']
): ProcessDesignAction => ({
  type: ProcessDesignActionType.SET_LIST_TABLE_DATA,
  payload: data,
});

export const setDiagramTableData = (
  data: ProcessDesignState['diagram']['table']['data']
): ProcessDesignAction => ({
  type: ProcessDesignActionType.SET_DIAGRAM_TABLE_DATA,
  payload: data,
});

export const setOptimizationTableData = (
  data: ProcessDesignState['optimization']['table']['data']
): ProcessDesignAction => ({
  type: ProcessDesignActionType.SET_OPTIMIZATION_TABLE_DATA,
  payload: data,
});

export const setResultsLineChartData = (
  data: ProcessDesignState['results']['lineChart']['data']
): ProcessDesignAction => ({
  type: ProcessDesignActionType.SET_RESULTS_LINECHART_DATA,
  payload: data,
});

export const setResultsBarChartData = (
  data: ProcessDesignState['results']['barChart']['data']
): ProcessDesignAction => ({
  type: ProcessDesignActionType.SET_RESULTS_BARCHART_DATA,
  payload: data,
});