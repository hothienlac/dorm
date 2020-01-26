module.exports = {
  name: 'models',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/models',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
