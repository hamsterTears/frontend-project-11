// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "globals": {
        "__dirname": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
      "node"
    ],
    "rules": {
      "node/no-unsupported-features/es-syntax": "off"
    }
}
