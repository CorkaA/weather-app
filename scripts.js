document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');
    const clearBtn = document.getElementById('clear-btn');


    searchInput.addEventListener('focus', () => {
        searchContainer.classList.add('is-active');
    });

    searchInput.addEventListener('blur', () => {
        searchContainer.classList.remove('is-active');
    });


    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        console.log('Введён текст:', value);

        if (value.length > 0) {
            searchContainer.classList.add('is-filled');
        } else {
            searchContainer.classList.remove('is-filled');
        }
    });


    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchContainer.classList.remove('is-filled');
        searchInput.focus();
        console.log('Введён текст:', '');
    });
});