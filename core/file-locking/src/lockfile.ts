import fs from 'fs';

import locker from 'lockfile';
import { Callback } from '@verdaccio/types';

import { lockfile, statDir, statfile } from './utils';

// locks a file by creating a lock file
const lockFile = function(name: string, callback: Callback): void {
  Promise.resolve()
    .then(() => {
      return statDir(name);
    })
    .then(() => {
      return statfile(name);
    })
    .then(() => {
      return lockfile(name);
    })
    .then(() => {
      callback(null);
    })
    .catch(err => {
      callback(err);
    });
};

export { lockFile };
