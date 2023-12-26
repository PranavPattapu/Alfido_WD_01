document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login-link');
    const loginPopup = document.getElementById('login');
    const closeBtn = document.querySelector('.close-btn');

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginPopup.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        loginPopup.classList.remove('show');
    });
});
