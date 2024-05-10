# Search Data Repositories Config File

Configuration file to pass to the `add-taskflow` command for the Search Data Repositories Task Flow. Specifications in the config file can be overriden by options supplied on the command line.

```
strudel add-taskflow -c config.json
```

```
{
  "name": "my-taskflow",
  "template": "search-data-repositories",
  "pages": {
    "main": {
      "pageTitle":"Search Data Repositories App",
      "pageDescription": "Description of this app section"
    }
  },
  "data": {
    "main": {
      "cards": {
        "dataSource": "default/search-data-repositories/datasets.json",
        "dataIdField": "id"
      }
    }
  },
  "definitions": {
    "columns": {
      "main": {
        "card": {
          "title": "title",
          "content": "summary",
          "tags": "tags"
        }
      }
    },
    "filters": {
      "main": [
        {
          "field": "category",
          "displayName":"Category",
          "filterType":"CheckboxList",
          "props":{
            "options":[
              {
                "label":"Groundwater",
                "value":"Groundwater"
              },
              {
                "label":"Fires",
                "value":"Fires"
              },
              {
                "label":"Floods",
                "value":"Floods"
              },
              {
                "label":"Earthquakes",
                "value":"Earthquakes"
              }
            ]
          }
        },
        {
          "field":"tags",
          "displayName":"Tags",
          "filterType":"CheckboxList",
          "props":{
            "options":[
              {
                "label":"Boreal forest",
                "value":"Boreal forest"
              },
              {
                "label":"Carbon and greenhouse gas emissions",
                "value":"Carbon and greenhouse gas emissions"
              },
              {
                "label":"Ecology",
                "value":"Ecology"
              }
            ]
          }
        },
        {
          "field":"publication_date",
          "displayName":"Publication Date",
          "filterType":"date range"
        }
      ]
    }
  }
}
```

#### `name`

The name of the Task Flow directory to generate.

#### `template`

The name of the Task Flow template to use. Determines which Task Flow config will be compatible and which template files to add to the app. Can be overridden by the `--template` option.

#### `pages.main.pageTitle`

Title to appear at the top of the main page.

#### `pages.main.pageDescription`

Text to appear underneath the title at the top of the main page.

#### `data.main.table.dataSource`

Source of the data for the initial list of items on the main page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.main.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record. For example, `"id"`.

#### `definitions.columns.main.card`

Map of card sections to property names in the data source. This determines the content of the cards on the main page.

#### `definitions.filters.main`

List of filters to display on the main page and use to filter the main data cards. Each filter has a definition object to determine how it renders and functions.

#### `definitions.filters.main.field`

Exact name of the property field in the data to filter on. 

#### `definitions.filters.main.displayName`

Text to display in the label for the filter.

#### `definitions.filters.main.filterType`

The kind of filter component and function to use. Must be `"CheckboxList"` or `"Slider"`. More filter types will be supported in the future.

#### `definitions.filters.main.props`

Extra options to pass to the filter based on the filter type.
