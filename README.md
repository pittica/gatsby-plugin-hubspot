# pittica/gatsby-plugin-hubspot

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-hubspot)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-hubspot)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-hubspot)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/pittica/gatsby-plugin-hubspot/react)
[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-hubspot)](https://www.npmjs.com/package/@pittica/gatsby-plugin-hubspot)

## Description

[HubSpot](https://www.hubspot.com/) plugin for [GatsbyJS](https://www.gatsbyjs.org/).

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-hubspot)](https://www.npmjs.com/package/@pittica/gatsby-plugin-hubspot)
[![npm](https://img.shields.io/npm/dm/@pittica/gatsby-plugin-hubspot)](https://www.npmjs.com/package/@pittica/gatsby-plugin-hubspot)

```shell
npm install @pittica/gatsby-plugin-hubspot
```

## Usage

The plugin provides integration for [v](https://www.hubspot.com/) site.

## Configuration

Edit your **gatsby-config.js**.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@pittica/gatsby-plugin-hubspot`,
      options: {
        region: 'eu1',
        portal: 'XXXXXX',
      }
    },
  ],
}
```

(c) 2022, [Pittica S.r.l.](https://pittica.com).
