// tailwind.config.js
module.exports = {
    content: ['content/*.htm', 'layouts/*.htm', 'pages/*.htm', 'partials/*.htm'],
    mode: 'jit',
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        screens: {}, // reset screens by using bootstrap breakpoints
        extend: {},
    },
    variants: {},
    plugins: [],
};
