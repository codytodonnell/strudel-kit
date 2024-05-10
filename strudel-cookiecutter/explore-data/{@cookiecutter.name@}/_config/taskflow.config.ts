import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    items: {
      source: "default/explore-data/genomes.tsv",
      idField: "Proteome_ID"
    }
  },
  pages: {
    index: {
      title: "Explore Data App Test",
      description: "Description of this app section",
      tableColumns: [
        {
          field: "Organism",
          headerName: "Organism",
          width: 200
        },
        {
          field: "Common Name",
          headerName: "Common Name",
          width: 200
        },
        {
          field: "Assembly",
          headerName: "Assembly",
          width: 150
        },
        {
          field: "Data Usage Policy",
          headerName: "Data Usage Policy",
          width: 220
        },
        {
          field: "Euk. BUSCO %",
          headerName: "Euk. BUSCO %",
          type: "number",
          width: 200
        },
        {
          field: "Emb. BUSCO %",
          headerName: "Emb. BUSCO %",
          type: "number",
          width: 200
        }
      ],
      tableFilters: [
        {
          field: "Assembly",
          displayName: "Assembly",
          filterType: "CheckboxList",
          props: {
            options: [
              {
                label: "JGI",
                value: "JGI"
              },
              {
                label: "BYU",
                value: "BYU"
              },
              {
                label: "AGP",
                value: "AGP"
              }
            ]
          }
        },
        {
          field: "Data Usage Policy",
          displayName: "Data Usage Policy",
          filterType: "CheckboxList",
          props: {
            options: [
              {
                label: "restricted",
                value: "restricted"
              },
              {
                label: "unrestricted",
                value: "unrestricted"
              }
            ]
          }
        },
        {
          field: "Euk. BUSCO %",
          displayName: "Euk. BUSCO %",
          filterType: "Slider",
          props: {
            min: 0,
            max: 100
          }
        },
        {
          field: "Emb. BUSCO %",
          displayName: "Emb. BUSCO %",
          filterType: "Slider",
          props: {
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
}