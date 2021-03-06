import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Software Quality Day @ Novatec`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: 'software-quality-day-at-nt',
  plugins: ["gatsby-plugin-styled-components"]
};

export default config;
