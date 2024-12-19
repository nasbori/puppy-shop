const telegram = window.Telegram.WebApp;
telegram.ready();
const user = telegram.initDataUnsafe.user || {};
document.addEventListener('DOMContentLoaded', () => 
{
    if (user.first_name) 
    {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) 
        {
            const greeting = document.createElement('p');
            greeting.textContent = `Привет, ${user.first_name}!`;
            heroContent.appendChild(greeting);
        }
    }
    console.log("Пользователь Telegram:", user);
});
