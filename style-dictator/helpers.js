// Helpers used in build.js

const isValue = (obj) => "value" in obj;

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

// Format entries to a preferred form
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

module.exports = {
  flattenObject,
  formatEntries,
};
