import { getSetting } from 'meteor/vulcan:core';
import { addInitFunction } from 'meteor/vulcan:events';

import fetchScript from './fetchScript';

// fetchScript accepts settings for the promise options see ./fetchScript
const fetch = fetchScript();

// Init sentry function
const initLogRocket = () => {
  // Verify the Sentry DSN is set
  const LogRocketID = getSetting('logRocket.id');

  if (LogRocketID) {
    fetch('https://cdn.logrocket.io/LogRocket.min.js')
      .then(response => {
        console.log('====================================');
        console.log(LogRocket);
        console.log('====================================');
        // LogRocket should be available globally
        // eslint-disable-next-line
        if (LogRocket) {
          // LogRocket should be available globally
          // eslint-disable-next-line
          LogRocket.init(LogRocketID);
        }
      })
      .catch(error => {
        console.warn('LogRocket script loading failed', error);
      });
  }
  return null;
};

addInitFunction(initLogRocket);
