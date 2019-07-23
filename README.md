# Aec Startups

[![Netlify Status](https://api.netlify.com/api/v1/badges/febae95e-84d3-4b49-a269-d696fe56de36/deploy-status)](https://app.netlify.com/sites/aecstartups/deploys)


A collection of shiny AEC Startups
http://www.aecstartups.com/


# Adding New Entries

The website is auto-generated from entries from [this Airtable](https://airtable.com/shrNwsr1a122knj36).

To add a new entry just fill out [this form ](https://airtable.com/shrLpxcEdauXQcecZ).
Once the entry is approved it will be automatically published to the website


# Development

### Setup

```bash
$ yarn install
```

### Dev server

```bash
$ yarn serve
```

This command the Vue app and a local lambda for development. It expects `AIRTABLE_API_KEY` and `AIRTABLE_API_URL` environment variables to be set. If these variables are missing, a mock response is returned (see `lambda/mockdata.json`)


# License
MIT
