module.exports = {
  source: ["tokens.json"],
  platforms: {
    javascript: {
      transformGroup: ["js/MUI"],
      tokenSet: "undefined",
      tokenPrefix: "MUI_TOKENS",
      buildPath: "my-app/src/build/tokens/", // It would be better to have a pipeline generate the tokens instead and publishing them as a NPM package that we can pull into our apps
      files: [
        {
          destination: "palette.js",
          format: "mui/tokens",
          tokenType: "palette",
        },
        {
          destination: "typography.js",
          format: "mui/tokens",
          tokenType: "typography",
        },
        {
          destination: "spacing.js",
          format: "mui/spacing",
          tokenType: "spacing",
        },
      ],
    },
  },
};
