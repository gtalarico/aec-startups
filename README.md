# Aec Startups [WIP]

[![Netlify Status](https://api.netlify.com/api/v1/badges/febae95e-84d3-4b49-a269-d696fe56de36/deploy-status)](https://app.netlify.com/sites/aecstartups/deploys)


A collection of shiny AEC Startups

http://www.aecstartups.com/

# New Entries

[Create an issue here](https://github.com/gtalarico/aec-startups/issues/new?assignees=&labels=&template=new-startup-entry.md&title=) or submit a  PR.

The website is auto-generated base on the entries in [data.yaml](https://github.com/gtalarico/aec-startups/blob/master/data.yaml).

License MIT


# Development

Setup

```bash
$ yarn install
```

Dev server

```bash
$ yarn serve
# from another tab
$ npx netlify-lambda serve .
```

`env` with `AIRTABLE_KEY` must be sourced
