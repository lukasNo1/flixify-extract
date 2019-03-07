const classHandle = 'awesome-player';
let open = window.XMLHttpRequest.prototype.open;
let send = window.XMLHttpRequest.prototype.send;

function openReplacement(method, url, async, user, password) {
  this._url = url;
  return open.apply(this, arguments);
}

function sendReplacement(data) {
  if (this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }

  this.onreadystatechange = onReadyStateChangeReplacement;
  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {
  if (this.readyState === 4 && this.responseType == 'json') {
    if (this.response.item) {
      let item = this.response.item;
      let media = item.media;

      let lastEL = null;

      // get only the last video source
      for (let i in media) {
        lastEL = media[i];
      }

      if(lastEL) {
        lastEL = lastEL.replace('http://', 'https://');

        initPlayer(lastEL);
      }
    }
  }

  if (this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments);
  }
}

function initPlayer(vidUrl) {
  removePlayer();

  let wrapper = document.getElementsByTagName('body');

  let newVid = document.createElement('video');
  newVid.src = vidUrl;
  newVid.controls = 'controls';
  newVid.style = 'width: 60%;position: fixed;top:10px;left: 50%;transform: translateX(-50%);z-index: 9999999;';
  newVid.className = classHandle;

  wrapper[0].appendChild(newVid);
}

function removePlayer() {
  let player = document.getElementsByClassName(classHandle);

  if (player.length > 0) {
    player[0].parentNode.removeChild(player[0]);
  }
}

window.XMLHttpRequest.prototype.open = openReplacement;
window.XMLHttpRequest.prototype.send = sendReplacement;