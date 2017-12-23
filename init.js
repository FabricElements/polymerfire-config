(function() {
  "use strict";

  if (typeof firebase === 'undefined') {
    throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before firebase-init.html');
  }
  var script = document.createElement('script');
  // script.async = true;
  script.src = '/__/firebase/init.js';
  script.onload = onload;
  document.head.appendChild(script);
})();
