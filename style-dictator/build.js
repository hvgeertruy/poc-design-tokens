/** This build script is inspired on https://github.com/headwayio/shipwright-tokens/tree/a51ff008ead1d6faf47eca719ac1a3f278032d48 */

/** Imports/dependencies */
const Helpers = require("./helpers");
const StyleDictionary = require("style-dictionary").extend(
  "./style-dictator/config.js"
);

// will transform tokens into our preferred form
StyleDictionary.registerTransformGroup({
  name: "muiTokens",
  transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/hex"],
});

// Will transform tokens in a consumable MUI theme format
StyleDictionary.registerFormat({
  name: "toTokens",
  formatter: ({ dictionary, platform, file }) => {
    return `export const ${
      platform.tokenPrefix
    }_${file.tokenGroup.toUpperCase()} = ${Helpers.formatEntries(
      dictionary?.tokens[platform.tokenSet][file.tokenGroup]
    )}`;
  },
});

// Will transform spacing tokens in a consumable MUI theme format
StyleDictionary.registerFormat({
  name: "toSpacing",
  formatter: ({ dictionary, platform, file }) => {
    const spacings = dictionary?.tokens[platform.tokenSet][file.tokenGroup];

    return `export const ${
      platform.tokenPrefix
    }_${file.tokenGroup.toUpperCase()} = ${JSON.stringify(
      Object.keys(spacings).map((key) => {
        return spacings[key].value;
      })
    )}`;
  },
});

StyleDictionary.buildAllPlatforms();
