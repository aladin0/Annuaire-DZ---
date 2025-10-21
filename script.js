document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { name: 'Police', number: '17', icon: 'fas fa-shield-alt' },
        { name: 'Ambulance / Protection Civile', number: '14', icon: 'fas fa-ambulance' },
        { name: 'Pompiers', number: '14', icon: 'fas fa-fire-extinguisher' },
        { name: 'Gendarmerie Nationale', number: '1055', icon: 'fas fa-user-secret' },
        { name: 'Urgence Gaz (Sonelgaz)', number: '3303', icon: 'fas fa-gas-pump' },
        { name: 'Urgence Électricité (Sonelgaz)', number: '3303', icon: 'fas fa-bolt' },
        { name: 'Sécurité des Forêts', number: '1070', icon: 'fas fa-tree' },
        { name: 'Centre Anti-Poison', number: '021441111', icon: 'fas fa-skull-crossbones' },
        { name: 'Assistance Médicale (SAMU)', number: '115', icon: 'fas fa-hospital' },
        { name: 'Sûreté Nationale', number: '1548', icon: 'fas fa-building' }
    ];

    const servicesContainer = document.getElementById('servicesContainer');
    const searchInput = document.getElementById('searchInput');

    function displayServices(filter = '') {
        servicesContainer.innerHTML = '';
        const filteredServices = services.filter(service =>
            service.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredServices.length === 0) {
            servicesContainer.innerHTML = '<p class="no-results">No emergency services found matching your search.</p>';
            return;
        }

        filteredServices.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('service-card');

            card.innerHTML = `
                <i class="${service.icon} icon"></i>
                <h2>${service.name}</h2>
                <a href="tel:${service.number}" class="phone-number">${service.number}</a>
            `;
            servicesContainer.appendChild(card);
        });
    }

    // Initial display of all services
    displayServices();

    // Search functionality
    searchInput.addEventListener('input', (event) => {
        displayServices(event.target.value);
    });
});
