module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        {
          release: 'patch',
          type: 'build'
        },
        {
          release: 'patch',
          type: 'chore'
        },
        {
          release: 'patch',
          type: 'ci'
        },
        {
          release: 'patch',
          type: 'docs'
        },
        {
          release: 'patch',
          type: 'refactor'
        },
        {
          release: 'patch',
          type: 'style'
        },
        {
          release: 'patch',
          type: 'test'
        },
        {
          release: false,
          type: 'release'
        },
        {
          release: false,
          type: 'wip'
        },
        {
          release: false,
          scope: 'no-release'
        }
      ]
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          {
            hidden: false,
            section: ':hammer: Build',
            type: 'build'
          },
          {
            hidden: false,
            section: ':sweat_drops: Chore',
            type: 'chore'
          },
          {
            hidden: false,
            section: ':robot: Continuous Integration',
            type: 'ci'
          },
          {
            hidden: false,
            section: ':books: Documentation',
            type: 'docs'
          },
          {
            hidden: false,
            section: ':sparkles: Feature',
            type: 'feat'
          },
          {
            hidden: false,
            section: ':bug: Fix',
            type: 'fix'
          },
          {
            hidden: false,
            section: ':zap: Performance',
            type: 'perf'
          },
          {
            hidden: false,
            section: ':wrench: Refactor',
            type: 'refactor'
          },
          {
            hidden: false,
            section: ':barber: Style',
            type: 'style'
          },
          {
            hidden: false,
            section: ':dart: Test',
            type: 'test'
          }
        ]
      }
    }],
    ['@semantic-release/exec', {
      prepareCmd: 'yarn build'
    }],
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md'
    }],
    ['@semantic-release/npm', {
      npmPublish: false,
      tarballDir: '.'
    }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG.md',
        'package.json',
        'yarn.lock'
      ],
      message: 'release(${nextRelease.version}): [skip ci].\n\n${nextRelease.notes}'
    }],
    ['@semantic-release/github', {
      assets: ['./*.tgz']
    }]
  ]
}
