
function printMessages() {

  const messages = document.querySelectorAll('.selectable-text');

  if (messages.length <= 1) {
    return;
  }

  messages.forEach(message => {
      if (message.innerText !== '' && message.innerText !== ' ') {
        console.log(message.innerText);
      }
  });
}

setInterval(printMessages, 5000);
