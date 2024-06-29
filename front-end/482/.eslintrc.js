module.exports = {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        // Add custom rules here if needed
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
