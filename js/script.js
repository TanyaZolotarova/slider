document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        startAt: 0,
        gap: 20,
        perView: 2,
        autoplay: 3000,
    }).mount();
})

const map = L.map('map').setView([50.4501, 30.5234], 13);

const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const coordinates = L.marker([50.4501, 30.5234]).addTo(map)
    .bindPopup('Киев, Украина')
    .openPopup();