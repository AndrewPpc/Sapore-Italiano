function validateForm() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '') {
        document.getElementById('nameError').textContent = 'Enter your name.';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        return;
    }

    const message = document.getElementById('message').value;
    if (message.length === 0) {
        document.getElementById('messageError').textContent = 'Enter a message.';
        return;
    }

    alert('We recevied your message!');

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}