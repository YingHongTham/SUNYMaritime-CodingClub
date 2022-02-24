function addElemToDiv(id) {
  const elem = document.createElement('div');
  elem.innerHTML = "new div";
  const div = document.getElementById(id);
  div.appendChild(elem);
}

function repeatEverySecond(fn) {
  setTimeout( () => {
    fn();
    repeatEverySecond(fn);
  }, 1000);
}

//repeatEverySecond(() => {addElemToDiv('addToMe');});


function addComment() {
  const inputElem = document.getElementById('commentInput');
  const mainElem = document.getElementById('comments');
  const newElem = document.createElement('div');
  newElem.innerHTML = inputElem.value;
  mainElem.appendChild(newElem);
}
