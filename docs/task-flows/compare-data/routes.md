# Compare Data Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Compare Data Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { CompareDataWrapper } from "./yourtaskflowname/CompareDataWrapper";
import { NewScenario } from "./yourtaskflowname/NewScenario";
import { ScenarioComparison } from "./yourtaskflowname/ScenarioComparison";
import { ScenarioList } from "./yourtaskflowname/ScenarioList";
```

### Router Object

```js
{
  path: "/yourtaskflowname",
  element: <CompareDataWrapper />,
  children: [
    {
      index: true,
      element: <ScenarioList />
    },
    {
      path: 'compare',
      element: <ScenarioComparison />
    },
    {
      path: 'new',
      element: <NewScenario />
    },
  ]
},
```
