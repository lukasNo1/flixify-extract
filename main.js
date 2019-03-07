const classHandle = 'awesome-player';

let s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === 'removePlayer') {
          let player = document.getElementsByClassName(classHandle);

          if (player.length > 0) {
            player[0].parentNode.removeChild(player[0]);
          }
        }
    }
);
