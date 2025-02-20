module.exports = {
    extends: [
        'eslint:recommended', // Use the recommended ESLint rules
        'plugin:astro/recommended', // Astro plugin recommended rules
        'plugin:prettier/recommended', // Use Prettier's recommended config to avoid conflicts
    ],
    parser: 'babel-eslint', // Parse modern JavaScript
    env: {
        browser: true, // Enable browser globals (window, document, etc.)
        es2021: true, // Use ES2021 syntax (optional based on your project needs)
        node: true, // Enable Node.js globals (if using server-side code)
    },
    parserOptions: {
        ecmaVersion: 2021, // Support the latest ECMAScript features
        sourceType: 'module', // Use ES modules (import/export)
    },
    rules: {
        'no-unused-vars': 'warn', // Warn for unused variables
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'crlf',
            },
        ],
    },
    overrides: [
        {
            files: ['*.astro'], // Apply Astro plugin for .astro files
            rules: {
                'astro/no-unsafe-html': 'warn', // Example rule to avoid unsafe HTML (optional)
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro'],
            },
        },
    },
};
