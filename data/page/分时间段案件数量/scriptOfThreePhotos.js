// eslint-disable-next-line no-undef
const select = document.getElementById('select');
let lastselect = 'container5';
select.addEventListener('change', () => {
  // 获取当前选择的选项值
  const selectedOption = select.value;

  // eslint-disable-next-line no-undef
  const div = document.getElementById(selectedOption);
  // eslint-disable-next-line no-undef
  const lastdiv = document.getElementById(lastselect);
  div.classList.remove('hidden');
  setTimeout(() => {
    div.classList.remove('hidden2');
  }, 500);
  lastdiv.classList.add('hidden');
  setTimeout(() => {
    lastdiv.classList.add('hidden2');
  }, 500);
  lastselect = selectedOption;
});
