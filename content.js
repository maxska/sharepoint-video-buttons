const gotMessage = () => {
  ELEM_CLASSNAME = 'od-PlaybackPanel-button';

  let parentElem =
    document.getElementsByClassName(ELEM_CLASSNAME)[0].parentElement;

  // create the back button element:
  let backButton = document.createElement('div');
  backButton.type = 'div';
  backButton.style.backgroundColor = 'white';
  backButton.style.color = '#333333';
  backButton.style.border = '1px solid #333333';
  backButton.style.padding = '2px';
  backButton.style.margin = '5px';
  backButton.style.display = 'inline-block';
  backButton.style.fontWeight = '800';
  backButton.style.fontSize = '20px';

  backButton.innerHTML = '<<';
  backButton.setAttribute('id', 'extension-back-button');

  // create the forward button element:
  let forwardButton = document.createElement('div');
  forwardButton.type = 'div';
  forwardButton.style.backgroundColor = 'white';
  forwardButton.style.color = '#333333';
  forwardButton.style.border = '1px solid #333333';
  forwardButton.style.padding = '2px';
  forwardButton.style.margin = '5px';
  forwardButton.style.display = 'inline-block';
  forwardButton.style.fontWeight = '800';
  forwardButton.style.fontSize = '20px';

  forwardButton.innerHTML = '>>';
  forwardButton.setAttribute('id', 'extension-forward-button');

  // add back button to the document
  parentElem.appendChild(backButton);

  videoElem = document.getElementsByTagName('video')[0];
  document
    .getElementById('extension-back-button')
    .addEventListener('click', () => {
      videoElem.currentTime = videoElem.currentTime - 5;
    });

  // add forward button to the document
  parentElem.appendChild(forwardButton);
  document
    .getElementById('extension-forward-button')
    .addEventListener('click', () => {
      videoElem.currentTime = videoElem.currentTime + 5;
    });

	alert("Buttons should now (when you click OK) appear close to the play button in the bottom of the video player.")
};
chrome.runtime.onMessage.addListener(gotMessage);
