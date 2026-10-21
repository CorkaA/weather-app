const weatherDetails = [
    {
        id: 'humidity',
        title: 'Влажность',
        icon: 'public/icons/humidity.svg',
        value: '75 %',
        scale: { type: 'progress', position: 75, min: '0%', max: '100%' },
        footer: null
    },
    {
        id: 'barometr',
        title: 'Давление',
        icon: 'public/icons/barometr.svg',
        value: '761',
        scale: { type: 'pressure', position: 92, min: '', max: '' },
        footer: 'Повышенное'
    },
    {
        id: 'visibility',
        title: 'Видимость',
        icon: 'public/icons/visibility.svg',
        value: '28 км',
        scale: { type: 'progress', position: 27, min: '', max: '' },
        footer: 'Нормальная'
    },
    {
        id: 'sunrise',
        title: 'Рассвет',
        icon: 'public/icons/sunrise.svg',
        value: '8:42',
        scale: null,
        footer: 'Прошло: 02:47'
    },
    {
        id: 'sunset',
        title: 'Закат',
        icon: 'public/icons/sunset.svg',
        value: '16:37',
        scale: null,
        footer: 'Осталось: 05:08'
    },
    {
        id: 'direction',
        title: 'Сила ветра',
        icon: 'public/icons/direction.svg',
        value: '2 м/с',
        scale: null,
        footer: 'Северо-западный'
    }
];