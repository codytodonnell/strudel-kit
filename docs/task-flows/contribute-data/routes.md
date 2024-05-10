# Contribute Data Routes

Below are the components to import and the router object to add to `routes.tsx` to implement the Contribute Data Task Flow. See all routes implemented in the [demo-app](https://github.com/strudel-science/strudel-kit/blob/main/strudel-demo-app/src/app/routes.tsx).

### Import Statements

```js
import { ContributeDataWrapper } from "./yourtaskflowname/ContributeDataWrapper";
import { ContributorPortal } from "./yourtaskflowname/ContributorPortal";
import { NewDataset } from "./yourtaskflowname/NewDataset";
import { Register } from "./yourtaskflowname/Register";
import { ReviewDataset } from "./yourtaskflowname/ReviewDataset";
```

### Router Object

```js
{
  path: "/yourtaskflowname",
  element: <ContributeDataWrapper />,
  children: [
    {
      index: true,
      element: <Register />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'portal',
      element: <ContributorPortal />
    },
    {
      path: 'new',
      element: <NewDataset />
    },
    {
      path: 'review',
      element: <ReviewDataset />
    }
  ]
},
```
