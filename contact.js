document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const username = document.getElementById('username');
    const email = document.getElementById('Email');
    const message = document.getElementById('message');

    // Create and insert error elements
    const nameError = document.createElement('div');
    const emailError = document.createElement('div');
    const messageError = document.createElement('div');
    const successMessage = document.createElement('div');

    nameError.style.color = emailError.style.color = messageError.style.color = 'red';
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.marginTop = '10px';

    username.insertAdjacentElement('afterend', nameError);
    email.insertAdjacentElement('afterend', emailError);
    message.insertAdjacentElement('afterend', messageError);
    form.appendChild(successMessage);

    function validateEmail(email) {
        const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        if (username.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            isValid = false;
        }

        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });
});
