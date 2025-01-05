document.getElementById('payButton').addEventListener('click', function () {
    // Получение значений полей
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const phone = document.getElementById('num').value.trim();
    const email = document.getElementById('em').value.trim();

    // Регулярные выражения для проверки
    const phoneRegex = /^\+[0-9]{10,15}$/; // Телефон должен начинаться с "+" и содержать 10-15 цифр
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email: простой формат

    // Проверка полей
    if (!name) {
        alert('Пожалуйста, введите имя');
        return;
    }

    if (!surname) {
        alert('Пожалуйста, введите фамилию');
        return;
    }

    if (!phone || !phoneRegex.test(phone)) {
        alert('Введите корректный номер телефона, начинающийся с "+" (10-15 цифр)');
        return;
    }

    if (email && !emailRegex.test(email)) {
        alert('Введите корректный email или оставьте поле пустым');
        return;
    }

    // Успешная проверка
    alert('Форма заполнена корректно! Перенаправляем...');
    window.location.href = '../index.html'; // Переход на страницу благодарности
});