module.exports = {
  //* Configuration for JavaScript files (global)
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        bracketSameLine: true,
        endOfLine: 'auto'
      }
    ],
    'no-console': 'off'
  },
  overrides: [
    //* Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'unused-imports'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',

        'prettier',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: false
          }
        ],
        'react/prop-types': 'off',
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state']
          }
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        'no-restricted-globals': 'off',
        'no-use-before-define': 'off',
        'no-return-assign': 'off',
        'no-debugger': 'warn',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'no-useless-escape': 'off',
        'no-promise-executor-return': 'off',
        'consistent-return': 'off',
        'default-param-last': 'off',
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'import/order': 'off',

        'unused-imports/no-unused-imports-ts': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        semi: ['error', 'always'],
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton']
          }
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-no-constructed-context-values': 'off',

        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/display-name': ['off', { ignoreTranspilerName: true }],
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/jsx-no-useless-fragment': 'off',

        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            trailingComma: 'none',
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            bracketSameLine: true,
            endOfLine: 'auto'
          }
        ]
      }
    }
  ]
};
