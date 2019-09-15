document.getElementById('box').textContent = new Date().toLocaleString();
const button = document.getElementById('my-button');

button.addEventListener('click', () => {
  box.innerHTML += 'どん！<br>';
});

// ボタンをクリックすると、イベントリスナーが実行される
button.addEventListener('click', onAlert);

const select = document.getElementById('my-select');

select.addEventListener('change', (e) => {
  console.log('value: ', e.target.value);
});

const input = document.getElementById('input-word');
const form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('value: ', input.value);
});
