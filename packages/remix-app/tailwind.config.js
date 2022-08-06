const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '450px',
      },
      maxWidth: {
        '8xl': '80rem',
      },
    },
  },
  plugins: [
    plugin(function (helpers) {
      // variants that help styling Radix-UI components
      dataVariant('data-swipe', 'open', helpers);
      dataVariant('data-swipe', 'closed', helpers);
      dataVariant('data-swipe', 'move', helpers);
      dataVariant('data-swipe', 'cancel', helpers);
      dataVariant('data-swipe', 'end', helpers);
    }),
  ],
};

function dataVariant(
  variantName,
  state,
  {
    addVariant, // for registering custom variants
    e, // for manually escaping strings meant to be used in class names
  },
) {
  addVariant(`${variantName}-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `${variantName}-${state}${separator}${className}`,
      )}[${variantName}='${state}']`;
    });
  });

  addVariant(
    `group-${variantName}-${state}`,
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group[${variantName}='${state}'] .${e(
          `group-${variantName}-${state}${separator}${className}`,
        )}`;
      });
    },
  );

  addVariant(
    `peer-${variantName}-${state}`,
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.peer[${variantName}='${state}'] ~ .${e(
          `peer-${variantName}-${state}${separator}${className}`,
        )}`;
      });
    },
  );
}
