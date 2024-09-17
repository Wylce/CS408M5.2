// functionality for showing/hiding the comments and the audio transcript section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

const showHideTranscript = document.querySelector('.show-hide-transcript');
const transcriptWrapper=document.querySelector('.transcript-wrapper');

commentWrapper.style.display = 'none';
transcriptWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

showHideTranscript.onclick = function() {
  let showHideText = showHideTranscript.textContent;
  if(showHideText === 'Show Transcript'){
    showHideTranscript.textContent = 'Hide Transcript';
    transcriptWrapper.style.display = 'block';
  } else {
    showHideTranscript.textContent = 'Show Transcript';
    transcriptWrapper.style.display = 'none';
  }
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
