const telegram = window.Telegram.WebApp;

telegram.ready();

const user = telegram.initDataUnsafe.user || {};

document.addEventListener('DOMContentLoaded', () => {
    if (user.first_name) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const greeting = document.createElement('p');
            greeting.textContent = `Привет, ${user.first_name}!`;
            heroContent.appendChild(greeting);
        }
    }

    console.log("Пользователь Telegram:", user);
    console.log("Telegram Web App подключен!");
    console.log("Данные пользователя:", telegram.initDataUnsafe.user);

    const buttonContainer = document.querySelector('.button-container');
    if (buttonContainer) {
        const button = document.createElement('button');
        button.textContent = "Отправить сообщение";
        button.addEventListener('click', () => {
            telegram.sendData("Hello from Web App!");
        });
        buttonContainer.appendChild(button);
    }
});
document.querySelector("#animateButton").addEventListener("click", function() {
    const content = document.querySelector("#contentBlock");
    content.style.transition = "opacity 0.5s";
    content.style.opacity = 1;
});
document.querySelector("#myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;

    if (!email || !name) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);

    fetch('/submitForm', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert("Форма отправлена!");
    })
    .catch(error => {
        console.error("Ошибка при отправке формы:", error);
    });
});
document.querySelector("#loadDataButton").addEventListener("click", function() {
    fetch('/getData')
        .then(response => response.json())
        .then(data => {
            const content = document.querySelector("#dataContainer");
            content.textContent = `Полученные данные: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            console.error("Ошибка загрузки данных:", error);
        });
});
