const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault()
    const {
        elements: {email, password}, 
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!')
    }
    const data = {
        email: `${email.value}`,
        password: `${password.value}`
    }

    console.log(data);
    event.currentTarget.reset();
}


