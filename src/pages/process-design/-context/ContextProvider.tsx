import React, { useContext, useReducer } from 'react';
import { ProcessDesignAction, ProcessDesignActionType } from './actions';

export interface ProcessDesignState {
  list: {
    table: {
      columns: any[];
      data: any;
      dataIdField: string;
    };
  };
  diagram: {
    table: {
      columns: any[];
      data: any[];
      dataIdField: string;
    };
  };
  optimization: {
    table: {
      columns: any[];
      data: any[];
      dataIdField: string;
    };
  };
  results: {
    lineChart: {
      data: any[];
    };
    barChart: {
      data: any[];
    };
  };
  selectedItem?: any;
}

interface ProcessDesignProviderProps {
  list: Partial<ProcessDesignState['list']>;
  diagram: Partial<ProcessDesignState['diagram']>;
  optimization: Partial<ProcessDesignState['optimization']>;
  children: React.ReactNode;
}

const ProcessDesignContext = React.createContext<
  | {
      state: ProcessDesignState;
      dispatch: React.Dispatch<ProcessDesignAction>;
    }
  | undefined
>(undefined);

const initialState: ProcessDesignState = {
  list: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
  },
  diagram: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
  },
  optimization: {
    table: {
      columns: [],
      data: [],
      dataIdField: 'id',
    },
  },
  results: {
    lineChart: {
      data: [],
    },
    barChart: {
      data: [],
    },
  },
};

const initState = (
  state: ProcessDesignState,
  props: ProcessDesignProviderProps
) => {
  const st = { ...state };
  if (props.list?.table?.columns)
    st.list.table.columns = props.list.table.columns;
  if (props.list?.table?.data) st.list.table.data = props.list.table.data;
  if (props.list?.table?.dataIdField)
    st.list.table.dataIdField = props.list.table.dataIdField;
  if (props.diagram?.table?.columns)
    st.diagram.table.columns = props.diagram.table.columns;
  if (props.diagram?.table?.data) st.diagram.table.data = props.diagram.table.data;
  if (props.diagram?.table?.dataIdField)
    st.diagram.table.dataIdField = props.diagram.table.dataIdField;
  if (props.optimization?.table?.columns)
    st.optimization.table.columns = props.optimization.table.columns;
  if (props.optimization?.table?.data)
    st.optimization.table.data = props.optimization.table.data;
  if (props.optimization?.table?.dataIdField)
    st.optimization.table.dataIdField = props.optimization.table.dataIdField;
  return st;
};

function processDesignReducer(
  state: ProcessDesignState,
  action: ProcessDesignAction
): ProcessDesignState {
  switch (action.type) {
    case ProcessDesignActionType.SET_LIST_TABLE_DATA: {
      return {
        ...state,
        list: {
          table: {
            ...state.list.table,
            data: action.payload,
          },
        },
      };
    }
    case ProcessDesignActionType.SET_DIAGRAM_TABLE_DATA: {
      return {
        ...state,
        diagram: {
          table: {
            ...state.diagram.table,
            data: action.payload,
          },
        },
      };
    }
    case ProcessDesignActionType.SET_OPTIMIZATION_TABLE_DATA: {
      return {
        ...state,
        optimization: {
          table: {
            ...state.optimization.table,
            data: action.payload,
          },
        },
      };
    }
    case ProcessDesignActionType.SET_RESULTS_LINECHART_DATA: {
      return {
        ...state,
        results: {
          ...state.results,
          lineChart: {
            ...state.results.lineChart,
            data: action.payload,
          },
        },
      };
    }
    case ProcessDesignActionType.SET_RESULTS_BARCHART_DATA: {
      return {
        ...state,
        results: {
          ...state.results,
          barChart: {
            ...state.results.barChart,
            data: action.payload,
          },
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const ProcessDesignProvider: React.FC<ProcessDesignProviderProps> = (
  props
) => {
  const [state, dispatch] = useReducer(
    processDesignReducer,
    initState(initialState, props)
  );
  const value = { state, dispatch };

  return (
    <ProcessDesignContext.Provider value={value}>
      {props.children}
    </ProcessDesignContext.Provider>
  );
};

export const useProcessDesign = () => {
  const context = useContext(ProcessDesignContext);
  if (context === undefined) {
    throw new Error(
      'useProcessDesign must be used within an ProcessDesignProvider'
    );
  }
  return context;
};