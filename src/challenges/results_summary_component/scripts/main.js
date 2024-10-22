        // Fetch the JSON file
        fetch('assets/data.json')
            .then(response => response.json()) // Parse the JSON data
            .then(data => {
                const container = document.getElementById('data-container');

                // Loop through the data and create HTML elements
                data.forEach(item => {
                    // Create a div for each category
                    const categoryDiv = document.createElement('div');
                    categoryDiv.classList.add('category');
                    categoryDiv.style.backgroundColor = `var(--p-bg-${item.colour})`;

                    // Create an img element for the icon
                    const icon = document.createElement('img');
                    icon.src = item.icon;
                    icon.alt = `${item.category} icon`;

                    // Create a span element for the category
                    const categoryText = document.createElement('span');
                    categoryText.textContent = `${item.category}`;
                    categoryText.style.color = `var(--p-${item.colour})`;

                    // Create a span element for the score
                    const scoreText = document.createElement('span');

                    const lighterText = document.createElement('span');
                    lighterText.textContent = ' / 100 ';
                    lighterText.classList.add('lighterText');

                    scoreText.textContent = `${item.score}`;
                    scoreText.appendChild(lighterText);
                    scoreText.style.marginLeft = `auto`;
                    scoreText.style.marginRight = `10px`;                    

                    // Append the icon and text to the category div
                    categoryDiv.appendChild(icon);
                    categoryDiv.appendChild(categoryText);
                    categoryDiv.appendChild(scoreText);

                    // Append the category div to the container
                    container.appendChild(categoryDiv);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
