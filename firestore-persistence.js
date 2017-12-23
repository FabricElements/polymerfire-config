(function() {
  "use strict";
  setTimeout(() => {
    if (typeof firebase === 'undefined') {
      throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before firebase-init.html');
    }
    firebase.firestore().enablePersistence()
      .catch(function(err) {
        if (err.code === 'failed-precondition') {
          throw new Error('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
        } else if (err.code === 'unimplemented') {
          throw new Error('The current browser does not support all of the features required to enable persistence');
        }
      });
  }, 1000);
})();
