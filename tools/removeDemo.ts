// This script removes demo app files
import * as fs from 'fs';
import * as rimraf from 'rimraf';
import {chalkSuccess} from './chalkConfig';

// tslint:disable:no-console

const pathsToRemove = [
  './src/actions/*',
  './src/utils',
  './src/components/*',
  './src/constants/*',
  './src/containers/*',
  './src/images',
  './src/reducers/*',
  './src/store/store.spec.js',
  './src/styles',
  './src/routes.js',
  './src/index.js',
  './tools/removeDemo.js',
];

const filesToCreate = [
  {
    path: './src/components/emptyTest.spec.js',
    content: '// Must have at least one test file in this directory or Mocha will throw an error.',
  },
  {
    path: './src/index.js',
    content: '// Set up your application entry point here...',
  },
  {
    path: './src/reducers/index.js',
    // tslint:disable-next-line:max-line-length
    content: '// Set up your root reducer here...\n import { combineReducers } from \'redux\';\n export default combineReducers;',
  },
];

function removePath(path: string, callback: () => void) {
  rimraf(path, (error) => {
    if (error) {
      throw error;
    }

    callback();
  });
}

function createFile(file: { path: string, content: string }) {
  fs.writeFile(file.path, file.content, (error) => {
    if (error) {
      throw error;
    }
  });
}

function removePackageJsonScriptEntry(scriptName: string) {
  const packageJsonPath = './package.json';
  const fileData = fs.readFileSync(packageJsonPath, { encoding: 'utf8' });
  const content = JSON.parse(fileData);
  delete content.scripts[scriptName];
  fs.writeFileSync(packageJsonPath,
    JSON.stringify(content, null, 2) + '\n');
}

let numPathsRemoved = 0;
pathsToRemove.map((path) => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) { // All paths have been processed
      // Now we can create files since we're done deleting.
      filesToCreate.map((file) => createFile(file));
    }
  });
});

removePackageJsonScriptEntry('remove-demo');

console.log(chalkSuccess('Demo app removed.'));
