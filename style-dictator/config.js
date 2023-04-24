module.exports = {
  source: ["tokens.json"],
  platforms: {
    javascript: {
      tokenSet: "MUI", // The name of the tokenset in Figma that we want to use as input
      tokenPrefix: "MUI_TOKENS", // Used as prefix for exposed sets. Ex. MUI_TOKENS_PALETTE, ...
      buildPath: "my-app/src/build/tokens/", // Path to generate tokens in. NOTE: It would be better to have a pipeline generate the tokens instead and publishing them as a NPM package that we can pull into our apps

      transformGroup: ["muiTokens"], // The transformer we want to use for generating the tokens. You should not have to change this value

      /* Define the Figma token groups that we want to generate.
       * destination: Filename of the generated tokens
       * tokenGroup: The name of the token group. Should be first level of tokenSet
       * format: The formatter used for generating tokens. `toTokens` should suffice for most cases
       */
      files: [
        {
          destination: "tokens_palette.js",
          tokenGroup: "palette",
          format: "toTokens",
        },
        {
          destination: "tokens_typography.js",
          tokenGroup: "typography",
          format: "toTokens",
        },
        {
          destination: "tokens_spacing.js",
          tokenGroup: "spacing",
          format: "toSpacing",
        },
      ],
    },
  },
};
