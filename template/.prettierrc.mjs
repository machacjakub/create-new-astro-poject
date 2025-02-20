/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astroS',
            options: {
                parser: 'astro',
            },
        },
    ],
    // General Prettier rules
    bracketSameLine: true,
    semi: true, // Use semicolons at the end of statements (recommended for consistency)
    singleQuote: true, // Use single quotes instead of double quotes
    trailingComma: 'all', // Add trailing commas wherever possible (objects, arrays, function parameters)
    bracketSpacing: true, // Add spaces between brackets in object literals, array literals, etc.
    arrowParens: 'always', // Always include parentheses around arrow function parameters (e.g., (x) => x)
    tabWidth: 4, // Use 2 spaces for indentation (common in JavaScript and modern codebases)
    useTabs: false, // Indent with spaces rather than tabs
    printWidth: 120, // Set a line length limit (80 characters is the standard)
    quoteProps: 'as-needed', // Only quote object properties when required (e.g., `obj.foo` not `'obj.foo'`)
    endOfLine: 'crlf', // Ensure CRLF line endings (for Windows environments)
    htmlWhitespaceSensitivity: 'strict',
};
