module.exports = {
  'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
  'globals': {
      '__dirname': true
    },
  'extends': 'eslint:recommended',
  'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
  'plugins': [
    'node'
    ],
  'rules': {
    'node/no-unsupported-features/es-syntax': 'off',
    'no-param-reassign': [
      'error', 
      { 
          'props': false 
      }
  ],
  //   "import/extensions" : [
  //     "error",
  //     "ignorePackages",
  //     {
  //         "js": "always"
  //     }
  // ],

  'no-underscore-dangle': [
    2, 
    { 
      'allow': ['__filename', '__dirname'] 
    }
]
    },
};
