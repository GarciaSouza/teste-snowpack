module.exports = {
  extends: [
    '@commitlint/config-angular'
  ],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-full-stop': [2, 'always', '.'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test',
        'wip'
      ]
    ]
  }
}
