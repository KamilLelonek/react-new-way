export let clearInput = function(inputName) {
  let input = document.getElementById(inputName);
  input.value = '';
  input.focus();
  input.blur();
}
