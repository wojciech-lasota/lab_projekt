const OFF = 0;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/react',
        'plugin:jest/recommended',
        // 'plugin:jsx-a11y/strict',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'import',
        'prettier',
        'html',
        'react',
        'react-hooks',
        'jest',
        // 'jsx-a11y',
    ],
    rules: {
        quotes: OFF,
        'prettier/prettier': [
            ERROR,
            {
                useTabs: false,
                semi: true,
                singleQuote: true,
                jsxSingleQuote: false,
                trailingComma: 'all',
                arrowParens: 'always',
            },
        ],

        'no-unused-vars': ERROR,
        'arrow-parens': [ERROR, 'always', { requireForBlockBody: false }],
        'no-use-before-define': ERROR,
        'no-plusplus': OFF,
        'react/react-in-jsx-scope': OFF,

        'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
        'import/prefer-default-export': OFF,
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        'react-hooks/rules-of-hooks': ERROR,
        'react-hooks/exhaustive-deps': ERROR,

        // 'jsx-a11y/label-has-for': [ERROR, { required: { every: ['id'] } }],

        'jest/no-commented-out-tests': ERROR,
    },
};
