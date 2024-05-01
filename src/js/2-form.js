const formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email;
  formData.message = savedData.message;
  document.querySelector('input[name="email"]').value = savedData.email;
  document.querySelector('textarea[name="message"]').value = savedData.message;
}

document.querySelector('.feedback-form').addEventListener('input', event => {
  if (
    event.target.type === 'email' ||
    event.target.tagName.toLowerCase() === 'textarea'
  ) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
    formData.email = '';
    formData.message = '';
  } else {
    alert('Будь ласка заповніть всі поля');
  }
});

//============================================================
