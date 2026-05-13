const playerCountInput = document.getElementById('player-count');
const container = document.getElementById('name-inputs');


function updateNameFields() {
    const count = parseInt(playerCountInput.value);
    
    // 1. Clear existing fields
    container.innerHTML = '';

    // 2. Limit the count between 2 and 10 manually for safety
    const finalCount = Math.min(Math.max(count, 2), 10);

    // 3. Create the new fields
    for (let i = 1; i <= finalCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'player-input-group';

        // const label = document.createElement('label');
        // label.innerText = `Player ${i} Name: `;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'name-input';
        input.name = `player_name_${i}`; // Flask will use this name to grab the data
        input.required = true;
        input.placeholder = `Player ${i}`;

        // wrapper.appendChild(label);
        wrapper.appendChild(input);
        container.appendChild(wrapper);
    }
}

// Run once on page load to show the default 2 fields
updateNameFields();

// Listen for changes to the number input
playerCountInput.addEventListener('input', updateNameFields);