console.log('main.js is connected');

function postTweedToDatabase(e) {
  console.log('attempt');
  e.preventDefault();
  fetch('/api/tweeds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tweed: e.target.tweed.value,
    }),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    console.log(jsonRes);
  }).catch((err) => {
    console.log(err);
  })
  e.target.reset();
}

function getTweedInput() {
  const testForm = document.getElementById('tester');
  testForm.addEventListener('submit', (e) => postTweedToDatabase(e));
}

document.addEventListener('DOMContentLoaded', getTweedInput);