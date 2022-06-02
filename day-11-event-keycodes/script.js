const container = document.querySelector('.container');
const keyHistory = []; // array for saving pressed keys info history

document.addEventListener('keydown', (event) => {
  // prevent default actions for system keys like TAB or ALT
  event.preventDefault();
  
  // save key info into the history array but only if it's not the same as the last pressed key
  if (!keyHistory.length || event.code !== keyHistory[keyHistory.length - 1].code) {
    keyHistory.push({
      key: event.key,
      keyCode: event.keyCode,
      code: event.code
    });
  }
    
  // limit array size to 10 elements
  if (keyHistory.length > 10) { keyHistory.shift(); }

  // generate html for key info boxes
  let generatedHtml = `
    <div class="infobox">${event.key === ' ' ? 'Space' : event.key}<small class="infobox__caption">event.key</small></div>
    <div class="infobox">${event.keyCode}<small class="infobox__caption">event.keyCode</small></div>
    <div class="infobox">${event.code}<small class="infobox__caption">event.code</small></div>
  `;
  // add history info box
  generatedHtml = generatedHtml + generateHistory();
  
  // finally output generated info to the container
  container.innerHTML = generatedHtml;
});

function generateHistory() {
  if (keyHistory.length < 2) { return ''; } // show history only if there is at least two elements in array
  
  // generate captions
  let content = `
  <div class="historybox">
    <div class="historybox__row">
      <div class="historybox__col historybox__caption">event.key</div>
      <div class="historybox__col historybox__caption">event.keyCode</div>
      <div class="historybox__col historybox__caption">event.code</div>
    </div>`;
  
  // loop through array and generate new lines with info
  keyHistory.forEach(el => {
    content = content + `
      <div class="historybox__row">
        <div class="historybox__col">${el.key}</div>
        <div class="historybox__col">${el.keyCode}</div>
        <div class="historybox__col">${el.code}</div>
      </div>
    `;
  });

  // close historybox div
  content = content + `</div>`;

  return content;
   
}