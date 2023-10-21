// app.js
const carDropdown = document.getElementById('car-dropdown');

// Replace with your car data
const carOptions = [
    { make: 'Toyota', model: 'Camry' },
    { make: 'Honda', model: 'Civic' },
    // Add more car data here
];

carOptions.forEach(car => {
    const option = document.createElement('option');
    option.value = `${car.make} ${car.model}`;
    option.text = `${car.make} ${car.model}`;
    carDropdown.appendChild(option);
});

carDropdown.addEventListener('change', () => {
    // Implement search functionality here
});
