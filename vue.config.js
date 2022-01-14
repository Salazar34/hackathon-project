module.exports = {
  pages: {
    "city-security": {
      entry: "./src/pages/CitySecurity/main.js",
      title: "The new way to think city security",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    "municipality": {
      entry: "./src/pages/Municipality/main.js",
      title: "",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
