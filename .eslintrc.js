module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "google"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "object-curly-spacing": [2, "always"],
        "semi": off,
        "arrow-parens": off,
        "comma-dangle": off
    }
};
