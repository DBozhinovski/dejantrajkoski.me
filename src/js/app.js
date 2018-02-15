// JS Goes here - ES6 supported
import Barba from "barba.js";

import HideShowTransition from './transitions';
import bindLinks from './links';

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

Barba.Prefetch.init();

Barba.Pjax.getTransition = function() {
  return HideShowTransition;
};

Barba.Pjax.start();

bindLinks();

