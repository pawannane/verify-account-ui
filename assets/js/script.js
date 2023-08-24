const code = document.querySelectorAll(".input-code");

code.forEach((codeItem, idx) => {
  codeItem.addEventListener("keydown", (e) => handleInputCode(idx, e))
})

const handleInputCode = (idx, e) => {
  if (e.key >= 0 && e.key <= 9) {
    code[idx].value = '';

    setTimeout(() => {
      code[idx + 1].focus();
    }, 50);
  }
  else if (e.key == 'Backspace') {
    setTimeout(() => {
      code[idx - 1].focus();
    }, 50);
  }
}

