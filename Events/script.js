const viewElement = document.getElementById('content');
const editElement = document.getElementById('editor');

document.addEventListener('keydown', function (event) {
  const isModifierPressed = event.ctrlKey || event.metaKey;

  const key = event.key.toLowerCase();

  if (isModifierPressed && (key === 'e' || key === 'у')) {
    event.preventDefault();

    if (viewElement.style.display !== 'none') {
      editElement.value = viewElement.innerText;
      viewElement.style.display = 'none';
      editElement.style.display = 'block';
      editElement.focus();
    }
  }

  if (isModifierPressed && (key === 's' || key === 'і')) {
    event.preventDefault();

    if (editElement.style.display === 'block') {
      viewElement.innerText = editElement.value;
      editElement.style.display = 'none';
      viewElement.style.display = 'block';
    }
  }
});