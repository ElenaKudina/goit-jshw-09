const STORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form');


form.addEventListener('input', () => {
    const userEmail = form.elements.email.value;
    const userMessage = form.elements.message.value;

    const data = {
        name: userEmail,
        message: userMessage,
    };

    saveToLS(STORAGE_KEY, data);
});


form.addEventListener('submit', e => {
  e.preventDefault();


  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  if (!userEmail || !userMessage) {
    alert('Please fill out all fields before submitting');
    return;
  }

  /* const data = loadFromLS(STORAGE_KEY) || {};
  console.log(data); */

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function loadFromLS(key) {
  const data = localStorage.getItem(key);

  {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

  /* try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  } */
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY);

  if (data) {
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;}
  
}

restoreData();
