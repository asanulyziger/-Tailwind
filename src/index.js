const nameInput = document.getElementById('full-name');
const phoneInput = document.getElementById('phone-number');
const checkoutForm = document.getElementById('checkout-form');

// 1. Запрет на ввод цифр в поле Full name
nameInput.addEventListener('input', function() {
    this.value = this.value.replace(/\d/g, '');
});

// 2. Запрет на ввод букв в поле Phone number (разрешены только цифры и знак +)
phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^\d+]/g, '');
});

// 3. Запрет на отправку пустых пробелов
checkoutForm.addEventListener('submit', function(event) {
    const requiredInputs = checkoutForm.querySelectorAll('input[required]');
    let isFormValid = true;

    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isFormValid = false;
            input.value = ''; // Сбрасываем пробелы, чтобы браузер показал стандартную подсказку
        }
    });

    if (!isFormValid) {
        event.preventDefault(); // Блокируем отправку, если есть пустые поля
    } else {
        event.preventDefault(); // Исключаем перезагрузку страницы для демонстрации успешного теста
        alert('Форма заполнена идеально! Данные готовы к отправке.');
    }
});