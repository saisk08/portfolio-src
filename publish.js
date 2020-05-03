const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/saisk08/saisk08.github.io.git',
    add: true,
  },
  {}
);
