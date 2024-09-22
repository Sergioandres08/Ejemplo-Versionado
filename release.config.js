const config = {
    branches: ['main','dev'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      "@semantic-release/changelog",
      '@semantic-release/github'
    ]
  };
  
  module.exports = config;