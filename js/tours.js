document.addEventListener('DOMContentLoaded', function () {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
    const userGreeting = document.getElementById('userGreeting');
    if (storedUserData) {
      userGreeting.textContent = `Hi, ${storedUserData.name}!`;
    } else {
      userGreeting.textContent = 'Hi, Anonymous';
    }
  
    const tourForm = document.getElementById('tourForm');
    tourForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (name && email) {
        const userData = {
          name: name,
          email: email
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        userGreeting.textContent = `Hi, ${name}!`;
      } else {
        alert('Please fill in all fields with valid information.');
      }
    });
  });
  