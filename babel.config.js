module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@routes": "./src/routes",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};