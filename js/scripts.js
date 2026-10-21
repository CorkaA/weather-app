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

    console.log(weatherDetails);


    const forecastList = document.getElementById('forecast-list');

    function createCard(item) {
        const card = document.createElement('li');
        card.className = 'forecast__card';

        const title = document.createElement('h2');
        title.className = 'forecast__title';
        title.textContent = item.title;

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'forecast__icon-wrapper';
        const icon = document.createElement('img');
        icon.className = 'forecast__icon';
        icon.src = item.icon;
        icon.width = 32;
        icon.height = 32;
        icon.alt = '';
        icon.setAttribute('aria-hidden', 'true');
        iconWrapper.append(icon);

        const value = document.createElement('p');
        value.className = 'forecast__value';
        value.textContent = item.value;

        card.append(title, iconWrapper, value);

        if (item.scale) {
            const scale = document.createElement('div');
            scale.className = 'forecast__scale';

            const bar = document.createElement('div');
            bar.className = `forecast__scale-bar forecast__scale-bar--${item.scale.type}`;

            const thumb = document.createElement('span');
            thumb.className = 'forecast__scale-thumb';
            thumb.style.left = `${item.scale.position}px`;

            bar.append(thumb);

            const labels = document.createElement('div');
            labels.className = 'forecast__scale-labels';
            labels.innerHTML = `
                <span class="forecast__scale-label">${item.scale.min ?? ''}</span>
                <span class="forecast__scale-label">${item.scale.max ?? ''}</span>
            `;

            scale.append(bar, labels);

            if (item.footer) {
                const footer = document.createElement('p');
                footer.className = 'forecast__footer';
                footer.textContent = item.footer;

                scale.append(footer);
            }

            card.append(scale);
        } else if (item.footer) {
            const footer = document.createElement('p');
                footer.className = 'forecast__footer';
                footer.textContent = item.footer;

                card.append(footer);
        }

        return card;
    }

    if (forecastList && typeof weatherDetails !== 'undefined') {
        const fragment = document.createDocumentFragment();

        weatherDetails.forEach((item) => {
            fragment.append(createCard(item));
        });

        forecastList.append(fragment);
    }
});