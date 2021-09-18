chrome.runtime.onMessage.addListener(gotMessage);

const gotMessage = () => {
  alert('Message received');
}
