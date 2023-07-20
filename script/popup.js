window.addEventListener('load', function () {
    var popup = document.getElementById('popup');
    var closeButton = document.querySelector('.popup-close');

    function showPopup() {
        popup.classList.add('open');
    }

    function hidePopup() {
        popup.classList.remove('open');
    }

    closeButton.addEventListener('click', hidePopup);
    setTimeout(showPopup, 1000); // Показать попап через 1 секунду (можно изменить задержку)
});