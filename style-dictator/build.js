/** This build script is inspired on https://github.com/headwayio/shipwright-tokens/tree/a51ff008ead1d6faf47eca719ac1a3f278032d48 */

const StyleDictionary = require("style-dictionary").extend("./config.js");

/** Consts */
const isValue = (obj) => "value" in obj;

/** Helpers */

// Flatten object
const flattenObject = (key, obj) => {
  if (obj === undefined) return;
  if (isValue(obj)) {
    return [key, obj.value];
  }

  const entries = Object.entries(obj);
  const mapped = entries.map(([k, v]) => flattenObject(k, v));

  return [
    key,
    mapped.reduce((prev, curr) => {
      if (curr) {
        const [k, v] = curr;
        return {
          ...prev,
          [k]: v,
        };
      } else {
        return prev;
      }
    }, {}),
  ];
};

// Format entries to a more usable form
const formatEntries = (obj) => {
  if (!obj) return "";

  const entries = Object.entries(obj);
  const mapped = entries[0]?.length
    ? entries.map(([k, v]) => {
        const isStringOrNum = typeof v === "string" || typeof v === "number";
        return isStringOrNum ? [k, v] : flattenObject(k, v);
      })
    : [];

  const reduced = mapped.reduce((prev, curr) => {
    if (curr?.length) {
      const [k, v] = curr;
      return {
        ...prev,
        [k]: v,
      };
    } else {
      return prev;
    }
  }, {});

  return JSON.stringify(reduced);
};

/** Registered transforms */

StyleDictionary.registerTransformGroup({
  name: "js/MUI",
  transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/hex"],
});

/** Registered formats */

StyleDictionary.registerFormat({
  name: "mui/tokens",
  formatter: ({ dictionary, platform, file }) => {
    return `export const ${
      platform.tokenPrefix
    }_${file.tokenType.toUpperCase()} = ${formatEntries(
      dictionary?.tokens[platform.tokenSet][file.tokenType]
    )}`;
  },
});

StyleDictionary.registerFormat({
  name: "mui/spacing",
  formatter: ({ dictionary, platform, file }) => {
    const spacings = dictionary?.tokens[platform.tokenSet][file.tokenType];

    return `export const ${
      platform.tokenPrefix
    }_${file.tokenType.toUpperCase()} = ${JSON.stringify(
      Object.keys(spacings).map((key) => {
        return spacings[key].value;
      })
    )}`;
  },
});

StyleDictionary.buildAllPlatforms();
