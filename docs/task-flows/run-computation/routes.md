# Run Computation Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Run Computation Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { RunComputationWrapper } from "./yourtaskflowname";
import { DataInputs } from "./yourtaskflowname/DataInputs";
import { Settings } from "./yourtaskflowname/Settings";
import { Results } from "./yourtaskflowname/Results";
import { RunningComputation } from "./yourtaskflowname/RunningComputation";
import { Scenario } from "./yourtaskflowname/Scenario";
```

### Router Object

```js
{
  path: "/yourtaskflowname",
  element: <RunComputationWrapper />,
  children: [
    {
      index: true,
      element: <ComputationsList />
    },
    {
      path: "scenario",
      element: <Scenario />,
      children: [
        {
          path: 'data-inputs',
          element: <DataInputs />
        },
        {
          path: 'settings',
          element: <Settings />
        },
        {
          path: 'running',
          element: <RunningComputation />
        },
        {
          path: 'results',
          element: <Results />
        }
      ]
    },
  ]
},
```
