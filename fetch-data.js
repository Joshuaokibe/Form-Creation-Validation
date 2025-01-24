// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // API endpoint to fetch user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the HTML element to display the data
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert response to JSON format
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list element
        const userList = document.createElement('ul');

        // Loop through each user and add them to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);